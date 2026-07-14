/**
 * Scroll to a specific section smoothly using native smooth scroll.
 * (If you later integrate Lenis, you can adjust this.)
 */
export function scrollToSection(selector: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Format a date/time for chat timestamps.
 */
export function formatTime(date: Date = new Date()): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Optional: if you ever need a className merger, install clsx + tailwind-merge and uncomment below.
 * import { type ClassValue, clsx } from 'clsx';
 * import { twMerge } from 'tailwind-merge';
 * export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
 */
