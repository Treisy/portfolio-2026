import type { WorkExperience } from "@/types";
import { experience as experienceData } from "@/data/experience";

export async function getExperience(): Promise<WorkExperience[]> {
  return experienceData;
}
