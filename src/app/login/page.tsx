
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Chrome, Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSocialAction = (provider: string) => {
    setIsLoading(true);
    // Simulation of social login/signup
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  const handleAuthAction = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation of email auth
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
            <Heart className="w-7 h-7 fill-current" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold font-headline">Welcome to MoodMate</CardTitle>
            <CardDescription>Your safe space for emotional support</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 rounded-full h-10">
              <TabsTrigger value="login" className="rounded-full">Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="rounded-full">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4 animate-in fade-in-50 duration-300">
              <div className="space-y-4">
                <Button 
                  variant="outline"
                  className="w-full rounded-full h-12 gap-3 border-2" 
                  onClick={() => handleSocialAction('google')}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></span>
                  ) : (
                    <Chrome className="w-5 h-5 text-primary" />
                  )}
                  Continue with Google
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or email login</span>
                  </div>
                </div>

                <form onSubmit={handleAuthAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        className="pl-10 rounded-xl"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-10 rounded-xl"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full rounded-full h-12" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
                <div className="text-center">
                  <Link href="#" className="text-xs text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4 animate-in fade-in-50 duration-300">
              <div className="space-y-4">
                <Button 
                  variant="outline"
                  className="w-full rounded-full h-12 gap-3 border-2" 
                  onClick={() => handleSocialAction('google')}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></span>
                  ) : (
                    <Chrome className="w-5 h-5 text-primary" />
                  )}
                  Sign up with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or create account</span>
                  </div>
                </div>

                <form onSubmit={handleAuthAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="signup-name" 
                        type="text" 
                        placeholder="John Doe" 
                        className="pl-10 rounded-xl"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="name@example.com" 
                        className="pl-10 rounded-xl"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="signup-password" 
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-10 rounded-xl"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full rounded-full h-12" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <p className="text-[10px] text-center text-muted-foreground leading-relaxed">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
            Your data is encrypted and secure.
          </p>
          <Button variant="ghost" className="w-full text-xs h-8" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
