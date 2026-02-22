import type { SiteConfig } from "@/types";
import { siteConfig as config } from "@/data/siteConfig";

export async function getSiteConfig(): Promise<SiteConfig> {
  return config;
}
