import type { Skill } from "@/types";
import { skills as skillsData } from "@/data/skills";

export async function getSkills(): Promise<Skill[]> {
  return skillsData;
}
