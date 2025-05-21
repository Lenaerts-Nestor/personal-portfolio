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