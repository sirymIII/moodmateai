
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold font-headline mb-8">Privacy Policy</h1>
      <div className="prose prose-neutral dark:prose-invert space-y-6">
        <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">1. Introduction</h2>
          <p>At MoodMate AI, your privacy is our highest priority. This policy explains how we collect, use, and protect your data when you use our emotional support platform.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">2. Data We Collect</h2>
          <p>We collect minimal personal information. The primary data processed includes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Chat interactions (processed by AI to provide responses).</li>
            <li>Mood tracking data (stored to provide you with insights).</li>
            <li>Basic account information if you choose to sign in (e.g., email via Google).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">3. How We Use Data</h2>
          <p>We use your data exclusively to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide empathetic and relevant AI responses.</li>
            <li>Generate your personal mood dashboard.</li>
            <li>Improve the performance and safety of our AI models.</li>
          </ul>
          <p><strong>We do not sell your personal data to third parties.</strong></p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">4. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. Conversations are encrypted, and we regularly audit our systems for vulnerabilities.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold font-headline">5. Your Rights</h2>
          <p>You have the right to access, download, or delete your conversation history and mood records at any time through the application settings.</p>
        </section>
      </div>
    </div>
  );
}

    