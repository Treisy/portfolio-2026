/**
 * Merge class names with tailwind-merge style deduping.
 * For now a simple join; add tailwind-merge later if needed.
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Format experience date range from ISO month (e.g. "2024-01") to "2024 - Present" or "2022 - 2024". */
export function formatExperienceDate(startDate: string, endDate?: string): string {
  const start = startDate.slice(0, 4);
  if (!endDate) return `${start} - Present`;
  return `${start} - ${endDate.slice(0, 4)}`;
}
