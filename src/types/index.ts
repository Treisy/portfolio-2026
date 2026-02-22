export interface ProjectResult {
  value: string;
  label?: string;
}

export interface ProjectProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  /** Case study: "The Challenge" body (overview left column) */
  challenge?: string;
  /** Case study: "My Role" body (overview right column) */
  roleDescription?: string;
  techStack: string[];
  tags: string[];
  featured: boolean;
  image: { src: string; alt: string };
  /** Case study: gallery images (src + alt) */
  galleryImages?: { src: string; alt: string }[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  company?: string;
  year: number;
  /** Case study: impact metrics (e.g. "150%", "Increase in conversions") */
  results?: ProjectResult[];
  /** Case study: process steps */
  processSteps?: ProjectProcessStep[];
}

export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "management" | "tools";
  level: "expert" | "proficient" | "familiar";
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
  badgeImage?: string;
}

export interface Education {
  id: number;
  degree: string;
  degreeTitle: string;
  institution: string;
  startYear: number;
  endYear?: number;
  inProgress?: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  siteUrl: string;
  social: {
    github?: string;
    linkedin?: string;
    email: string;
  };
}

export interface Content {
  hero: {
    badge: string;
    mobileLabel?: string;
    title: string;
    subtitle: string;
    mobileSubtitle?: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    ctaPrimaryMobile?: string;
    ctaSecondaryMobile?: string;
    imagePlaceholder: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string; icon: string }>;
  };
  portfolio: {
    label: string;
    title: string;
    viewAllLabel: string;
    viewAllHref: string;
    /** List page (e.g. /projects) */
    listTitle?: string;
    listSubtitle?: string;
  };
  /** Project detail page labels */
  projectDetail?: {
    backLabel: string;
    breadcrumbPortfolio: string;
    viewLiveLabel: string;
    githubLabel: string;
    roleLabel: string;
    yearLabel: string;
    techStackLabel: string;
    overviewLabel: string;
    challengeTitle: string;
    roleSectionLabel: string;
    resultsLabel: string;
    resultsTitle: string;
    processLabel: string;
    processTitle: string;
    galleryLabel: string;
    galleryTitle: string;
    moreProjectsLabel: string;
    prevLabel: string;
    nextLabel: string;
  };
  blog: {
    label: string;
    title: string;
    subtitle: string;
    viewAllLabel: string;
    viewAllHref: string;
    /** Blog list page hero subtitle (optional override) */
    listSubtitle?: string;
    /** Filter pill labels: All, Agile, Leadership, Web Dev */
    filters?: Array<{ id: string; label: string }>;
    posts: Array<{
      title: string;
      excerpt: string;
      slug?: string;
      category?: string;
      date?: string;
      image?: string;
      /** Article body blocks for detail page */
      body?: Array<
        | { type: "p"; text: string }
        | { type: "h2"; text: string }
        | { type: "quote"; text: string; attribution?: string }
      >;
    }>;
  };
  /** Blog detail page labels */
  blogDetail?: {
    backLabel: string;
    tagsLabel: string;
    shareLabel: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
    };
    infoTitle: string;
  };
  about?: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      imagePlaceholder: string;
      ctaPrimary: string;
      ctaPrimaryHref: string;
      ctaSecondary: string;
      ctaSecondaryHref: string;
    };
    experience: { label: string; title: string; subtitle: string; scrollHint?: string };
    education: { label: string; title: string; subtitle: string };
    skills: { label: string; title: string; subtitle: string };
    certifications: { label: string; title: string };
    cta: { title: string; subtitle: string; downloadLabel: string; contactLabel: string };
  };
}
