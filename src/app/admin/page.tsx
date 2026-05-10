
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck, Users, MessageSquare, BarChart3, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminPage() {
  // Mock data for the admin dashboard
  const stats = [
    { label: "Total Users", value: "1,284", icon: Users, color: "text-blue-500" },
    { label: "AI Conversations", value: "45,201", icon: MessageSquare, color: "text-green-500" },
    { label: "Crisis Alerts", value: "12", icon: ShieldCheck, color: "text-red-500" },
    { label: "Avg. Mood Score", value: "6.8/10", icon: BarChart3, color: "text-amber-500" },
  ];

  const recentUsers = [
    { id: "1", name: "Anonymous User", joined: "2 hours ago", status: "Active" },
    { id: "2", name: "Anonymous User", joined: "5 hours ago", status: "Inactive" },
    { id: "3", name: "Anonymous User", joined: "1 day ago", status: "Active" },
    { id: "4", name: "Anonymous User", joined: "2 days ago", status: "Active" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-headline">Admin Dashboard</h1>
          <p className="text-muted-foreground">Internal oversight and platform metrics.</p>
        </div>
        <Badge variant="outline" className="px-3 py-1 flex items-center gap-1">
          <Settings className="w-3 h-3" /> System Status: Online
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Recent Platform Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Session Joined</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-mono text-xs">{user.id}***-****</TableCell>
                    <TableCell>{user.joined}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">System Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-300 text-xs">
              <p className="font-bold mb-1">Crisis Protocol Triggered</p>
              <p>ID: #CX-8822 triggered crisis help response. System logs sanitized.</p>
            </div>
            <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 text-xs">
              <p className="font-bold mb-1">GenAI Update</p>
              <p>Model version updated to gemini-2.5-flash. Latency improved by 15%.</p>
            </div>
            <div className="p-3 border rounded-lg bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300 text-xs">
              <p className="font-bold mb-1">Storage Usage</p>
              <p>Database approaching 70% capacity. Auto-scaling initiated.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    