import type { Content } from "@/types";
import { getContent } from "@/lib/data/content";

export type BlogPost = Content["blog"]["posts"][number];

export async function getPosts(): Promise<BlogPost[]> {
  const content = await getContent();
  return content.blog.posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}
