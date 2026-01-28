import { create } from "zustand";
import { Habit } from "../types";

interface HabitState {
  habits: Habit[];
  setHabits: (habits: Habit[]) => void;
  addHabit: (habit: Habit) => void;
  updateHabit: (id: string, updates: Partial<Habit>) => void;
  deleteHabit: (id: string) => void;
  toggleHabitCompletion: (id: string, date: number) => void;
}

export const useHabitStore = create<HabitState>((set) => ({
  habits: [],
  setHabits: (habits) => set({ habits }),
  addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
  updateHabit: (id, updates) =>
    set((state) => ({
      habits: state.habits.map((h) => (h.id === id ? { ...h, ...updates } : h)),
    })),
  deleteHabit: (id) =>
    set((state) => ({ habits: state.habits.filter((h) => h.id !== id) })),
  toggleHabitCompletion: (id, date) =>
    set((state) => ({
      habits: state.habits.map((h) => {
        if (h.id !== id) return h;
        const dateExists = h.completedDates.includes(date);
        return {
          ...h,
          completedDates: dateExists
            ? h.completedDates.filter((d) => d !== date)
            : [...h.completedDates, date].sort((a, b) => a - b),
        };
      }),
    })),
}));
