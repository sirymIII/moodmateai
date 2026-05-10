
"use client";

import React, { useState } from "react";
import { ChatInterface } from "@/components/chat-interface";
import { MoodDashboard } from "@/components/mood-dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, LayoutDashboard, Moon, Sun, Heart, BrainCircuit } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h1 className="text-xl font-bold font-headline tracking-tight text-primary">MoodMate AI</h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <div className="hidden md:flex gap-4">
               <Button variant="ghost" className="font-medium" asChild>
                 <Link href="/articles">Articles</Link>
               </Button>
               <Button variant="ghost" className="font-medium text-destructive hover:text-destructive" asChild>
                 <Link href="/crisis">Crisis Help</Link>
               </Button>
            </div>
            <Button className="rounded-full px-6" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <section className="text-center space-y-4 mb-10">
            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight max-w-2xl mx-auto leading-tight">
              Empathy and AI, combined for your <span className="text-primary italic">mental well-being.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Your confidential space to express, understand, and track your emotions with a supportive companion.
            </p>
          </section>

          <Tabs defaultValue="chat" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="p-1 h-12 rounded-full border bg-muted/50">
                <TabsTrigger value="chat" className="rounded-full px-8 h-10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2">
                  <MessageSquare className="w-4 h-4" /> Chat
                </TabsTrigger>
                <TabsTrigger value="dashboard" className="rounded-full px-8 h-10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2">
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="chat" className="mt-0 focus-visible:outline-none">
              <div className="h-[600px]">
                <ChatInterface />
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="mt-0 focus-visible:outline-none">
              <MoodDashboard />
            </TabsContent>
          </Tabs>

          <section className="mt-20 pt-10 border-t">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-semibold">Truly Empathetic</h3>
                <p className="text-muted-foreground">
                  Our AI doesn't just process text; it recognizes the nuances of human emotion to offer genuine comfort.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-semibold">Insightful Tracking</h3>
                <p className="text-muted-foreground">
                  Visualize your emotional trends over weeks and months to better understand your mental health patterns.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-semibold">Private & Safe</h3>
                <p className="text-muted-foreground">
                  Your conversations are confidential. We prioritize your privacy so you can speak your mind freely.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-xl font-headline font-bold">MoodMate AI</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
                Empowering your mental health journey through artificial intelligence and empathetic conversation.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
              <Link href="/about" className="hover:text-primary">About</Link>
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link href="/crisis" className="hover:text-primary">Contact (Crisis)</Link>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} MoodMate AI. Not a replacement for professional therapy.
          </p>
        </div>
      </footer>
    </div>
  );
}

    