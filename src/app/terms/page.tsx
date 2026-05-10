
import React from "react";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold font-headline mb-8">Terms of Service</h1>
      <div className="prose prose-neutral dark:prose-invert space-y-6">
        <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline text-destructive">NOT FOR EMERGENCIES</h2>
          <p className="font-bold bg-destructive/10 p-4 rounded-lg border border-destructive/20">
            MoodMate AI is an educational and supportive tool. It is NOT a medical device, a professional therapy service, or an emergency response system. If you are experiencing a life-threatening crisis, call emergency services immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">1. Acceptance of Terms</h2>
          <p>By using MoodMate AI, you agree to these terms. If you do not agree, please do not use the platform.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">2. Description of Service</h2>
          <p>MoodMate AI provides AI-driven emotional support and mood tracking. We do not provide medical diagnosis, treatment, or professional counseling.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">3. User Conduct</h2>
          <p>You agree to use MoodMate AI responsibly. You may not use the platform to harass others, generate harmful content, or attempt to compromise system security.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">4. Limitation of Liability</h2>
          <p>MoodMate AI and its developers are not liable for any damages resulting from your use of the service. You assume full responsibility for your mental health decisions and interactions.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">5. Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.</p>
        </section>
      </div>
    </div>
  );
}

    