
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
  emotion?: string;
};

export type MoodRecord = {
  date: string;
  emotion: string;
  count: number;
};

interface ChatState {
  messages: Message[];
  moodHistory: { [date: string]: string[] };
  addMessage: (msg: Message) => void;
  addMood: (date: string, emotion: string) => void;
  clearHistory: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      moodHistory: {},
      addMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),
      addMood: (date, emotion) =>
        set((state) => {
          const dayMoods = state.moodHistory[date] || [];
          return {
            moodHistory: {
              ...state.moodHistory,
              [date]: [...dayMoods, emotion],
            },
          };
        }),
      clearHistory: () => set({ messages: [], moodHistory: {} }),
    }),
    {
      name: "moodmate-storage",
    }
  )
);
