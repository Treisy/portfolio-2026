import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "agile-dashboard",
    title: "Agile Metrics Dashboard",
    description:
      "Real-time dashboard for sprint metrics and team velocity, built for distributed agile teams.",
    longDescription:
      "A complete redesign and agile transformation for a leading retail brand, resulting in 150% increase in conversions and improved team velocity. The dashboard provides real-time visibility into sprint health, velocity trends, and team capacity.",
    challenge:
      "The client was struggling with an outdated e-commerce platform that resulted in high cart abandonment rates and poor user experience. The development team lacked structure and faced constant delays in feature delivery. They needed a complete overhaul of both their platform and their development processes to stay competitive.",
    roleDescription:
      "I led the agile transformation and designed the metrics dashboard. I facilitated sprint ceremonies, defined KPIs, and worked with the front-end team to build the React-based dashboard with real-time data from the backend APIs.",
    techStack: ["React", "TypeScript", "Node.js"],
    tags: ["Scrum Master", "Web Development"],
    featured: true,
    image: { src: "/images/project-agile-dashboard.jpg", alt: "Agile dashboard screenshot" },
    galleryImages: [
      { src: "/images/project-agile-dashboard.jpg", alt: "Dashboard overview" },
      { src: "/images/project-agile-dashboard.jpg", alt: "Sprint metrics view" },
    ],
    liveUrl: "#",
    role: "Scrum Master & Developer",
    year: 2024,
    results: [
      { value: "150%", label: "Increase in conversions" },
      { value: "40%", label: "Improvement in team velocity" },
      { value: "3x", label: "Faster feature delivery" },
      { value: "100%", label: "Stakeholder satisfaction" },
    ],
    processSteps: [
      { step: 1, title: "Discovery & assessment", description: "Stakeholder interviews and current process mapping to identify pain points and define success metrics." },
      { step: 2, title: "Agile adoption", description: "Introduced Scrum framework, trained the team, and established sprint cadence with clear definition of done." },
      { step: 3, title: "Dashboard design & build", description: "Designed and delivered the metrics dashboard with real-time data and customizable views for different roles." },
    ],
  },
  {
    id: 2,
    slug: "project-portal",
    title: "Project Portal",
    description:
      "Centralized project visibility and reporting for stakeholders and delivery teams.",
    techStack: ["Astro", "TypeScript", "REST API"],
    tags: ["Project Management", "Web Development"],
    featured: true,
    image: { src: "/images/project-portal.jpg", alt: "Project portal screenshot" },
    role: "Project Manager & Developer",
    year: 2024,
  },
  {
    id: 3,
    slug: "team-workspace",
    title: "Team Workspace",
    description:
      "Collaboration hub for remote teams with boards, docs, and integrations.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    tags: ["Web Development"],
    featured: true,
    image: { src: "/images/project-workspace.jpg", alt: "Team workspace screenshot" },
    role: "Full-Stack Developer",
    year: 2023,
  },
  {
    id: 4,
    slug: "portfolio-site",
    title: "Portfolio 2026",
    description: "This site: Astro, TypeScript, Tailwind, designed for performance and SEO.",
    techStack: ["Astro", "TypeScript", "Tailwind CSS"],
    tags: ["Web Development"],
    featured: false,
    image: { src: "/images/portfolio-2026.jpg", alt: "Portfolio site" },
    githubUrl: "#",
    role: "Developer",
    year: 2026,
  },
];
