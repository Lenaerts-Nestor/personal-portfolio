import type { ExperienceListProps } from "../../../../interface/experience";


export const ExperienceList = ({ 
  responsibilitiesKeys, 
  t, 
  featured, 
  className = 'flex-grow' 
}: ExperienceListProps) => {
  if (!responsibilitiesKeys?.length) return null;
  
  return (
    <ul className={`space-y-2 text-gray-700 text-sm ${className}`}>
      {responsibilitiesKeys.map((respKey, i) => (
        <li key={i} className='flex items-start'>
          <span
            className={`mr-2 ${
              featured ? 'text-indigo-500' : 'text-gray-500'
            }`}
          >
            •
          </span>
          <span>{t(respKey)}</span>
        </li>
      ))}
    </ul>
  );
};