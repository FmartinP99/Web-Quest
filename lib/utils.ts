import { NO_FILTER } from "@/types/filters.types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitAndDecode(input: string): string[] {
  if (!input) return [];

  const decoded = input.replace(/&amp;/g, "&");

  return decoded
    .split(/\s*&\s*/)
    .map((str) => str.trim())
    .filter(Boolean);
}

export const createFilterHandler = <T extends object>(
  setFilters: React.Dispatch<React.SetStateAction<T>>,
  key: keyof T,
) => {
  return (val: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: val === NO_FILTER ? undefined : val,
    }));
  };
};

export const getRandomItem = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};
