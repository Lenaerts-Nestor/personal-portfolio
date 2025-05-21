import type { JSX } from "react";

export interface ProjectTechBadgesProps {
  technologies: string[];
  renderTechIcon: (tech: string) => JSX.Element | null;
}
export interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}
export interface ProjectCarouselProps {
  projects: any[];
  carouselIdx: number;
  setCarouselIdx: React.Dispatch<React.SetStateAction<number>>;
  handleProjectClick: (project: any) => void;
  getProjectDescription: (project: any) => string;
  t: (key: string) => string;
}
export interface ProjectCardProps {
  project: any;
  getProjectDescription: (project: any) => string;
  handleProjectClick: (project: any) => void;
  t: (key: string) => string;
}
