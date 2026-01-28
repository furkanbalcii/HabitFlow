export type Frequency = "daily" | "weekly" | "custom";

export interface Habit {
  id: string;
  userId: string;
  name: string;
  icon: string;
  color: string;
  frequency: Frequency;
  targetDays: number;
  createdAt: number;
  completedDates: number[]; // timestamps
  reminderTime?: string; // "09:00" format
  isActive: boolean;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: number;
  level: number;
  xp: number;
  badges: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: "streak" | "completion" | "special";
}
