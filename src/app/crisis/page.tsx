
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Globe, AlertTriangle, HeartPulse } from "lucide-react";

export default function CrisisPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center space-y-6 mb-12">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-destructive/10 text-destructive mb-2">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold font-headline tracking-tight text-destructive">Crisis Support</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          If you or someone you know is in immediate danger or experiencing a life-threatening emergency, please call your local emergency services (e.g., 911) immediately.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="border-destructive/20 bg-destructive/5 shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-full bg-destructive text-destructive-foreground">
              <Phone className="w-6 h-6" />
            </div>
            <CardTitle className="font-headline text-2xl">National Suicide & Crisis Lifeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg font-semibold">Call or Text: <span className="text-destructive">988</span></p>
            <p className="text-muted-foreground">Available 24/7 in English and Spanish. Free and confidential support for people in distress, prevention and crisis resources.</p>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href="tel:988">Call Now</a>
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <MessageCircle className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Crisis Text Line</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">Text <span className="font-bold">HOME</span> to <span className="font-bold">741741</span></p>
              <p className="text-xs text-muted-foreground">Free, 24/7 crisis counseling for any type of emotional pain.</p>
              <Button variant="ghost" className="p-0 h-auto text-primary text-xs" asChild>
                <a href="https://www.crisistextline.org" target="_blank" rel="noopener noreferrer">Visit Website</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <HeartPulse className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">SAMHSA National Helpline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-bold">1-800-662-HELP (4357)</p>
              <p className="text-xs text-muted-foreground">For individuals and family members facing mental and/or substance use disorders.</p>
              <Button variant="ghost" className="p-0 h-auto text-primary text-xs" asChild>
                <a href="tel:18006624357">Call Help Line</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">The Trevor Project</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-bold">1-866-488-7386</p>
              <p className="text-xs text-muted-foreground">Crisis intervention and suicide prevention services for LGBTQ young people.</p>
              <Button variant="ghost" className="p-0 h-auto text-primary text-xs" asChild>
                <a href="tel:18664887386">Call TrevorLifeline</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">International Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">Find support outside of the US.</p>
              <p className="text-xs text-muted-foreground">Befrienders Worldwide and IASP provide directories for global helplines.</p>
              <Button variant="ghost" className="p-0 h-auto text-primary text-xs" asChild>
                <a href="https://www.befrienders.org" target="_blank" rel="noopener noreferrer">Visit Directory</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

    