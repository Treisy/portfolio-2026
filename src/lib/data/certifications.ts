import type { Certification } from "@/types";
import { certifications as certsData } from "@/data/certifications";

export async function getCertifications(): Promise<Certification[]> {
  return certsData;
}
