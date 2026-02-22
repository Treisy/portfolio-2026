import type { Project } from "@/types";
import { projects as projectsData } from "@/data/projects";

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projectsData.find((p) => p.slug === slug);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projectsData.filter((p) => p.featured);
}
