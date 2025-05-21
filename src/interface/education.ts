export interface EducationEntry {
  degreeKey: string;
  institutionKey: string;
  periodKey: string;
  status?: 'completed' | 'in_progress' | 'not_completed';
  descriptionKey?: string;
  courseworkTitleKey?: string;
  courseworkKeys?: string[];
  noteKey?: string;
}

export interface EducationCardProps {
  title: string
  institution: string
  period: string
  description: string
  courseworks: string[]
  courseworkTitle: string
  notCompleted?: boolean
  delay?: number
  badgeColor?: string
}

export interface ProfessionalDevCardProps {
  title: string
  sections: { title: string; description: string }[]
  delay?: number
}
