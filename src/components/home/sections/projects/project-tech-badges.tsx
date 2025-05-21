import type { ProjectTechBadgesProps } from "../../../../interface/project";


export const ProjectTechBadges = ({ technologies, renderTechIcon }: ProjectTechBadgesProps) => {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className='flex flex-wrap gap-2 mb-4'>
      {technologies.map((tech, index) => (
        <span
          key={index}
          className='flex items-center gap-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full'
        >
          {renderTechIcon(tech)}
          {tech}
        </span>
      ))}
    </div>
  );
};
