import { createElement } from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import type { OverviewSection } from '../../../../interface/intro';

export const createOverviewSections = (t: (key: string) => string): OverviewSection[] => [
  {
    icon: createElement(Code, { className: 'w-5 h-5' }),
    title: t('home.coreSkillsTitle'),
    description: t('home.intro.overviewSkillsDescription'),
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-600',
    iconColor: 'text-indigo-600',
  },
  {
    icon: createElement(GraduationCap, { className: 'w-5 h-5' }),
    title: t('home.educationTitle'),
    description: t('home.intro.overviewEducationSummary').replace(
      /API Development|Web Frameworks|Database Management/g,
      '<span class="font-semibold text-emerald-700">$&</span>'
    ),
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-600',
    iconColor: 'text-emerald-600',
  },
  {
    icon: createElement(Briefcase, { className: 'w-5 h-5' }),
    title: t('home.intro.internshipHighlightTitle'),
    description: t('home.intro.internshipHighlightDescription'),
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    iconColor: 'text-blue-600',
  },
];
