import type { JSX } from "react";
import { projects } from "../utils/projects-data";

/**
 * Base project structure from projects-data.tsx
 */
export interface Project {
  id: string;
  title: string;
  cardTranslationKey?: string;
  description: string;
  icon?: null | JSX.Element;
  image: string;
  type: string;
  technologies: string[];
  techs?: any[]; // Legacy field, can be removed if not used
  githubLink?: string;
  isPrivate?: boolean;
}

/**
 * Enhanced project with additional fields added at runtime
 */
export interface EnhancedProject extends Project {
  challenges: string;
  solutions: string;
}

export interface ProjectTechBadgesProps {
  technologies: string[];
  renderTechIcon: (tech: string) => JSX.Element | null;
}

export interface ProjectModalProps {
  project: EnhancedProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface ProjectCarouselProps {
  projects: EnhancedProject[];
  carouselIdx: number;
  setCarouselIdx: React.Dispatch<React.SetStateAction<number>>;
  handleProjectClick: (project: EnhancedProject) => void;
  getProjectDescription: (project: EnhancedProject) => string;
  t: (key: string) => string;
}

export interface ProjectCardProps {
  project: EnhancedProject;
  getProjectDescription: (project: EnhancedProject) => string;
  handleProjectClick: (project: EnhancedProject) => void;
  t: (key: string) => string;
}
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const enhancedProjects: EnhancedProject[] = projects.map((project) => ({
  ...project,
  challenges: '',
  solutions: '',
}));