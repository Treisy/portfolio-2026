import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Treisy Jiménez",
  title: "Full-Stack Developer & Engineering Manager",
  description:
    "Certified Scrum Master, Project Manager, and Web Developer based in Costa Rica with 8+ years of experience leading teams and building solutions that drive results.",
  siteUrl: "https://treisyjimenez.com",
  social: {
    github: "https://github.com/treisy",
    linkedin: "https://linkedin.com/in/treisyjimenez",
    email: "treisyjimenez@gmail.com"
  },
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;
