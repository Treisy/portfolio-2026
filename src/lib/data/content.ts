import type { Content } from "@/types";
import contentData from "@/data/content.json";

export async function getContent(): Promise<Content> {
  return contentData as Content;
}
