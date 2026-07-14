import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with conflict resolution.
 * Use this anywhere you conditionally combine classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Scroll to a specific section smoothly using Lenis.
 * (Assumes window.lenis is available after initialization)
 */
export function scrollToSection(selector: string) {
  if (typeof window !== 'undefined' && (window as any).lenis) {
    (window as any).lenis.scrollTo(selector, { offset: -50 });
  } else {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Format a date for the chat timestamps.
 */
export function formatTime(date: Date = new Date()): string {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}