
"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const ARTICLES = [
  {
    id: "1",
    title: "Understanding Depression: More Than Just Sadness",
    description: "Learn about the symptoms, causes, and treatment options for clinical depression.",
    category: "Mental Health",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "The Science of Addiction",
    description: "How substance abuse changes the brain and why recovery is a journey, not a destination.",
    category: "Drug Abuse",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Coping with Anxiety in a Digital Age",
    description: "Practical strategies for managing social media stress and constant connectivity.",
    category: "Mental Health",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Supporting a Loved One Through Recovery",
    description: "Tips and boundaries for helping friends or family members struggling with substance use.",
    category: "Drug Abuse",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "The Importance of Sleep for Mental Well-being",
    description: "Why your sleep cycle is the foundation of your emotional health.",
    category: "Mental Health",
    readTime: "4 min read",
  },
  {
    id: "6",
    title: "Harm Reduction: A Compassionate Approach",
    description: "Understanding strategies designed to reduce negative consequences of drug use.",
    category: "Drug Abuse",
    readTime: "10 min read",
  }
];

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Resources & Articles</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our collection of expert-reviewed articles on mental health, substance use, and emotional resilience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map((article) => (
          <Card key={article.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant={article.category === "Mental Health" ? "default" : "secondary"}>
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <CardTitle className="font-headline text-xl leading-tight">{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-sm line-clamp-3 mb-4">
                {article.description}
              </CardDescription>
              <Button variant="ghost" className="p-0 h-auto font-semibold text-primary group" asChild>
                <Link href={`#`}>
                  Read Article <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center space-y-4">
        <BookOpen className="w-10 h-10 text-primary mx-auto" />
        <h2 className="text-2xl font-bold font-headline">Need more specific information?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our library is constantly growing. If you're looking for something specific, feel free to ask MoodMate AI for recommendations.
        </p>
        <Button className="rounded-full px-8" asChild>
          <Link href="/">Back to Chat</Link>
        </Button>
      </div>
    </div>
  );
}

    