
"use client";

import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  ShieldCheck, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  AlertTriangle,
  Activity,
  ArrowUpRight,
  MoreVertical,
  Search,
  Filter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { label: "Total Users", value: "1,284", change: "+12% from last month", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Active Sessions", value: "142", change: "Currently online", icon: Activity, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "AI Tokens Used", value: "2.4M", change: "72% of monthly quota", icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Crisis Alerts", value: "12", change: "All resolved", icon: ShieldCheck, color: "text-red-500", bg: "bg-red-500/10" },
  ];

  const recentUsers = [
    { id: "USR-001", email: "user1@example.com", joined: "2 hours ago", status: "Active", risk: "Low" },
    { id: "USR-002", email: "user2@example.com", joined: "5 hours ago", status: "Inactive", risk: "Low" },
    { id: "USR-003", email: "user3@example.com", joined: "1 day ago", status: "Active", risk: "Medium" },
    { id: "USR-004", email: "user4@example.com", joined: "2 days ago", status: "Active", risk: "Low" },
    { id: "USR-005", email: "user5@example.com", joined: "3 days ago", status: "Banned", risk: "N/A" },
  ];

  const filteredUsers = recentUsers.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform oversight, analytics, and user safety management.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <BarChart3 className="w-4 h-4" /> Export Data
            </Button>
            <Button className="gap-2">
              <Settings className="w-4 h-4" /> System Config
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-sm border-none">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-headline">User Management</CardTitle>
                <CardDescription>View and manage registered users.</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search users..." 
                    className="pl-9 w-[200px] h-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User ID</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id} className="group">
                      <TableCell className="font-mono text-xs text-primary">{user.id}</TableCell>
                      <TableCell className="text-sm">{user.email}</TableCell>
                      <TableCell className="text-sm">{user.joined}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={cn(
                            user.risk === "Medium" ? "border-amber-500 text-amber-500" : 
                            user.risk === "High" ? "border-red-500 text-red-500" : 
                            "border-green-500 text-green-500"
                          )}
                        >
                          {user.risk}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={user.status === "Active" ? "default" : user.status === "Banned" ? "destructive" : "secondary"}
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>View Chat Logs</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Suspend User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-sm border-none bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5" /> System Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>API Latency</span>
                    <span>42ms</span>
                  </div>
                  <div className="h-1.5 w-full bg-primary-foreground/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[15%]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Database Load</span>
                    <span>24%</span>
                  </div>
                  <div className="h-1.5 w-full bg-primary-foreground/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[24%]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>AI Model Status</span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Operational
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-none">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" /> Security Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-300 text-xs">
                  <p className="font-bold mb-1">Crisis Trigger</p>
                  <p>User USR-8822 triggered high-risk alert. Emergency resources provided.</p>
                  <Button variant="link" className="p-0 h-auto text-xs text-red-700 dark:text-red-300 font-bold mt-2">
                    Review Logs <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                  </Button>
                </div>
                <div className="p-3 border rounded-lg bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300 text-xs">
                  <p className="font-bold mb-1">Rate Limit Peak</p>
                  <p>Unusual traffic spike detected from IP 192.168.1.1. Monitoring...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
