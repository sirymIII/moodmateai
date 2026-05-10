
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, AlertCircle, Trash2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useChatStore, Message } from "@/app/lib/chat-store";
import { detectEmotionalState } from "@/ai/flows/detect-emotional-state-flow";
import { generateEmpatheticResponse } from "@/ai/flows/generate-empathetic-response-flow";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const EMOTION_EMOJIS: Record<string, string> = {
  stress: "😫",
  anxiety: "😰",
  sadness: "😢",
  frustration: "😠",
  happiness: "😊",
  loneliness: "😔",
  neutral: "😐",
};

export function ChatInterface() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { messages, addMessage, addMood, clearHistory } = useChatStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessageText = input;
    setInput("");
    setIsLoading(true);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userMessageText,
      timestamp: Date.now(),
    };
    addMessage(userMessage);

    try {
      // 1. Detect emotion
      const emotionResult = await detectEmotionalState({ text: userMessageText });
      const detectedEmotion = emotionResult.emotion;
      
      // Update mood history
      const today = format(new Date(), "yyyy-MM-dd");
      addMood(today, detectedEmotion);

      // 2. Generate response
      const aiResponse = await generateEmpatheticResponse({
        emotionalState: detectedEmotion,
        userMessage: userMessageText,
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: aiResponse.empatheticResponse,
        timestamp: Date.now(),
        emotion: detectedEmotion,
      };
      addMessage(assistantMessage);
    } catch (error) {
      console.error("AI Error:", error);
      addMessage({
        id: Date.now().toString(),
        role: "assistant",
        content: "I'm sorry, I'm having trouble connecting right now. Please know that I'm here for you.",
        timestamp: Date.now(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto border rounded-xl bg-card shadow-lg overflow-hidden">
      <div className="p-4 border-b bg-primary/5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-headline text-lg font-bold">MoodMate AI</h2>
            <p className="text-xs text-muted-foreground">Always here to listen</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={clearHistory} title="Clear Chat">
          <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
        </Button>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/20 px-4 py-2 border-b flex items-center gap-2 text-xs text-amber-800 dark:text-amber-200">
        <AlertCircle className="w-3 h-3 shrink-0" />
        <p>MoodMate is an AI support companion, not a replacement for professional healthcare. If you're in crisis, please seek immediate help.</p>
      </div>

      <ScrollArea className="flex-1 p-4" viewportRef={scrollRef}>
        <div className="space-y-6">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-48 text-center space-y-3 px-8">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-muted-foreground font-medium">How are you feeling today? Share whatever is on your mind.</p>
            </div>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "flex w-full gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
                m.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <Avatar className="w-8 h-8 border">
                {m.role === "assistant" ? (
                  <AvatarImage src="https://picsum.photos/seed/moodmate/100/100" />
                ) : (
                  <AvatarImage src="https://picsum.photos/seed/user/100/100" />
                )}
                <AvatarFallback>{m.role === "user" ? "U" : "M"}</AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  "max-w-[80%] space-y-2",
                  m.role === "user" ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-muted text-foreground rounded-tl-none"
                  )}
                >
                  {m.content}
                </div>
                {m.emotion && (
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px] py-0 h-5 bg-secondary/10 hover:bg-secondary/20 border-secondary/20">
                      {EMOTION_EMOJIS[m.emotion]} {m.emotion}
                    </Badge>
                  </div>
                )}
                <span className="text-[10px] text-muted-foreground px-1">
                  {format(m.timestamp, "h:mm a")}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 animate-pulse">
              <Avatar className="w-8 h-8 border">
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <div className="bg-muted p-3 rounded-2xl rounded-tl-none w-24 h-10 flex items-center justify-center gap-1">
                <div className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSendMessage} className="p-4 border-t bg-background">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="rounded-full focus-visible:ring-primary h-12"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            className="rounded-full w-12 h-12 shrink-0 bg-primary hover:bg-primary/90"
            disabled={isLoading || !input.trim()}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  );
}
