import type { ReactNode } from "react";

export interface SectionHeadingProps {
  title: string;
  description: string;
  icon?: ReactNode;
  dangerouslySetDescriptionHTML?: boolean; 
}