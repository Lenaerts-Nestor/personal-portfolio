import { Building2, HelpCircle, Wrench } from 'lucide-react';
import type { ExperienceIconProps } from '../../../../interface/experience';


export const ExperienceIcon = ({ roleKey, featured }: ExperienceIconProps) => {
  const iconWrapperClassName = `p-2 rounded-lg ${
    featured ? 'bg-white border border-indigo-100' : 'bg-gray-100'
  }`;

  if (roleKey === 'experience.roles.softwareDeveloperIntern') {
    return (
      <div className={iconWrapperClassName}>
        <Building2 className='h-5 w-5 text-indigo-700' />
      </div>
    );
  } else if (
    roleKey === 'experience.roles.itSupportSpecialist' ||
    roleKey === 'experience.roles.ictSupportSpecialist'
  ) {
    return (
      <div className={iconWrapperClassName}>
        <HelpCircle className='h-5 w-5 text-gray-600' />
      </div>
    );
  } else {
    return (
      <div className={iconWrapperClassName}>
        <Wrench className='h-5 w-5 text-gray-600' />
      </div>
    );
  }
};