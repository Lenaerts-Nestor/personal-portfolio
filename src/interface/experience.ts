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