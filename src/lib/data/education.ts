import type { Education } from "@/types";
import { education as educationData } from "@/data/education";

export async function getEducation(): Promise<Education[]> {
  return educationData;
}
