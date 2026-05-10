
"use client";

import React from "react";
import { useChatStore } from "@/app/lib/chat-store";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Legend
} from "recharts";
import { format, subDays, parseISO } from "date-fns";
import { BrainCircuit, TrendingUp, Calendar } from "lucide-react";

const EMOTION_COLORS: Record<string, string> = {
  stress: "hsl(0, 84%, 60%)",
  anxiety: "hsl(30, 80%, 55%)",
  sadness: "hsl(215, 40%, 43%)",
  frustration: "hsl(12, 76%, 61%)",
  happiness: "hsl(192, 65%, 64%)",
  loneliness: "hsl(280, 65%, 60%)",
  neutral: "hsl(210, 10%, 80%)",
};

export function MoodDashboard() {
  const { moodHistory } = useChatStore();

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = subDays(new Date(), 6 - i);
    return format(d, "yyyy-MM-dd");
  });

  const chartData = last7Days.map((date) => {
    const moods = moodHistory[date] || [];
    const counts: any = { date: format(parseISO(date), "MMM d") };
    moods.forEach((m) => {
      counts[m] = (counts[m] || 0) + 1;
    });
    return counts;
  });

  const allDetectedMoods = Object.values(moodHistory).flat();
  const moodDistribution = Object.entries(
    allDetectedMoods.reduce((acc: any, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  const chartConfig: ChartConfig = {
    stress: { label: "Stress", color: EMOTION_COLORS.stress },
    anxiety: { label: "Anxiety", color: EMOTION_COLORS.anxiety },
    sadness: { label: "Sadness", color: EMOTION_COLORS.sadness },
    frustration: { label: "Frustration", color: EMOTION_COLORS.frustration },
    happiness: { label: "Happiness", color: EMOTION_COLORS.happiness },
    loneliness: { label: "Loneliness", color: EMOTION_COLORS.loneliness },
    neutral: { label: "Neutral", color: EMOTION_COLORS.neutral },
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-primary/5 border-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Days Tracked
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.keys(moodHistory).length}</div>
            <p className="text-xs text-muted-foreground">Keep going!</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/5 border-secondary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Check-ins
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allDetectedMoods.length}</div>
            <p className="text-xs text-muted-foreground">Emotional milestones</p>
          </CardContent>
        </Card>
        <Card className="bg-accent/5 border-accent/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BrainCircuit className="w-4 h-4" /> Resilience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Stable</div>
            <p className="text-xs text-muted-foreground">Recent trend looks positive</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mood Distribution</CardTitle>
            <CardDescription>Overall emotional frequency</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            {moodDistribution.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={moodDistribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {moodDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={EMOTION_COLORS[entry.name] || "hsl(var(--muted))"} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">No data yet</div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Trends</CardTitle>
            <CardDescription>How you've felt over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis hide />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  {Object.keys(chartConfig).map((key) => (
                    <Bar
                      key={key}
                      dataKey={key}
                      stackId="a"
                      fill={chartConfig[key].color}
                      radius={[0, 0, 0, 0]}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
