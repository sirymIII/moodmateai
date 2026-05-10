
import React from "react";
import { Heart, Sparkles, Shield, User } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold font-headline tracking-tight">About MoodMate AI</h1>
        <p className="text-xl text-muted-foreground">Bridging the gap between technology and emotional intelligence.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            MoodMate AI was born from a simple belief: that everyone deserves access to supportive, non-judgmental emotional care. We use advanced AI to provide a companion that listens with empathy, tracks emotional trends, and offers resources for mental well-being.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our goal isn't to replace human connection or professional therapy, but to supplement it by providing a 24/7 space for reflection and support.
          </p>
        </div>
        <div className="bg-primary/5 rounded-3xl p-8 grid grid-cols-2 gap-4">
          <div className="p-6 bg-card rounded-2xl shadow-sm space-y-2">
            <Heart className="text-primary w-8 h-8" />
            <h3 className="font-bold">Empathy First</h3>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-sm space-y-2">
            <Sparkles className="text-primary w-8 h-8" />
            <h3 className="font-bold">AI Powered</h3>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-sm space-y-2">
            <Shield className="text-primary w-8 h-8" />
            <h3 className="font-bold">Private</h3>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-sm space-y-2">
            <User className="text-primary w-8 h-8" />
            <h3 className="font-bold">User Centric</h3>
          </div>
        </div>
      </div>

      <div className="border-t pt-12 space-y-8">
        <h2 className="text-3xl font-bold font-headline text-center">The MoodMate Story</h2>
        <div className="max-w-2xl mx-auto prose prose-neutral dark:prose-invert">
          <p>
            Developed by a team of mental health advocates and technologists, MoodMate AI utilizes the latest breakthroughs in Large Language Models (LLMs) to understand the complexity of human emotions. 
          </p>
          <p>
            We recognize that mental health is a journey with peaks and valleys. By combining real-time conversation with insightful data visualization, we help users find patterns in their moods and provide them with the tools to navigate their emotional landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

    