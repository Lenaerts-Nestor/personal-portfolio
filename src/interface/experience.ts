export interface Experience {
  roleKey: string;
  companyKey: string;
  periodKey: string;
  typeKey: string;
  descriptionKey?: string;
  responsibilitiesKeys: string[];
  technologies?: { name: string; icon: React.ReactNode }[];
  featured: boolean;
}
export interface MobileExperienceCardProps {
  experience: Experience;
  index: number;
  t: (key: string) => string;
}
export interface ExperienceTechnologiesProps {
  technologies: Array<{ name: string; icon: React.ReactNode }>;
  t: (key: string) => string;
}
export interface ExperienceListProps {
  responsibilitiesKeys: string[];
  t: (key: string) => string;
  featured: boolean;
  className?: string;
}

 export interface ExperienceLayoutProps {
  experiences: Experience[];
  t: (key: string) => string;
}
export interface ExperienceIconProps {
  roleKey: string;
  featured: boolean;
}
export interface ExperienceHeaderProps {
  roleKey: string;
  companyKey: string;
  periodKey: string;
  typeKey: string;
  featured: boolean;
  t: (key: string) => string;
  isDesktop?: boolean;
}
export interface DesktopExperienceCardProps {
  experience: Experience;
  index: number;
  t: (key: string) => string;
}