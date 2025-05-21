export interface Skill {
  name: string;
  icon?: React.ReactNode;
  key: string;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
  lightColor: string;
  darkColor: string;
}