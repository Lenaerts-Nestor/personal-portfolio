import { useI18n } from '../../components/shared/i18nContext';
import {
  SiReact,
  SiTypescript,
  SiFastify,
  SiPostgresql,
  SiDrizzle,
  SiNodedotjs,
  SiSwagger,
  SiGit,
} from 'react-icons/si';

// Tech stack with icons and colors
const Amotrack_TechIcons = {
  React: { icon: SiReact, color: 'text-sky-500' },
  TypeScript: { icon: SiTypescript, color: 'text-blue-600' },
  Fastify: { icon: SiFastify, color: 'text-gray-800 dark:text-gray-200' },
  PostgreSQL: { icon: SiPostgresql, color: 'text-blue-700' },
  'Drizzle ORM': { icon: SiDrizzle, color: 'text-amber-500' },
  'Node.js': { icon: SiNodedotjs, color: 'text-green-600' },
  Swagger: { icon: SiSwagger, color: 'text-green-600' },
  Git: { icon: SiGit, color: 'text-red-600' },
};

export const AmoTrackSummary = () => {
  const { t } = useI18n();

  // Render tech icon
  const renderTechIcon = (tech: string) => {
    const iconData = Amotrack_TechIcons[tech as keyof typeof Amotrack_TechIcons];
    if (iconData) {
      const IconComponent = iconData.icon;
      return <IconComponent className={`h-5 w-5 ${iconData.color}`} />;
    }
    return null;
  };

  return (
    <div className='space-y-6'>
      {/* Project Overview */}
      <div>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>
          {t('projects.amotrack.overviewTitle')}
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          {t('projects.amotrack.overview')}
        </p>
      </div>

      {/* Technologies Used */}
      <div>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3'>
          {t('projects.amotrack.technologiesTitle')}
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
          {['React', 'TypeScript', 'Node.js', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Swagger', 'Git'].map(
            (tech, index) => (
              <div key={index} className='flex items-center space-x-2 bg-gray-100 dark:bg-gray-700/60 p-2 rounded-md shadow-sm'>
                {renderTechIcon(tech)}
                <span className='text-sm text-gray-800 dark:text-gray-200'>{tech}</span>
              </div>
            )
          )}
        </div>
      </div>
      
      {/* Key Features */}
      <div>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3'>
          {t('projects.amotrack.featuresTitle')}
        </h3>
        <ul className='list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300'>
          <li>{t('projects.amotrack.features.item1')}</li>
          <li>{t('projects.amotrack.features.item2')}</li>
          <li>{t('projects.amotrack.features.item3')}</li>
          <li>{t('projects.amotrack.features.item4')}</li>
          <li>{t('projects.amotrack.features.item5')}</li>
        </ul>
      </div>

      {/* Technical Architecture */}
      <div>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3'>
          {t('projects.amotrack.architectureTitle')}
        </h3>
        <div className='bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4'>
          <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            {t('projects.amotrack.frontendTitle')}
          </h4>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            {t('projects.amotrack.frontendDescription')}
          </p>
          <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            {t('projects.amotrack.backendTitle')}
          </h4>
          <p className='text-gray-600 dark:text-gray-400'>
            {t('projects.amotrack.backendDescription')}
          </p>
        </div>
      </div>

      {/* My Contributions */}
      <div>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3'>
          {t('projects.amotrack.contributionsTitle')}
        </h3>
        <ul className='list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300'>
          <li>{t('projects.amotrack.contributions.frontend')}</li>
          <li>{t('projects.amotrack.contributions.backend')}</li>
          <li>{t('projects.amotrack.contributions.database')}</li>
          <li>{t('projects.amotrack.contributions.api')}</li>
          <li>{t('projects.amotrack.contributions.deployment')}</li>
        </ul>
      </div>

      {/* Technical Challenges */}
      <div>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3'>
          {t('projects.technicalChallenge')}
        </h3>
        <p className='text-gray-700 dark:text-gray-300 mb-4'>
          {t('projects.amotrack.challenge')}
        </p>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3'>
          {t('projects.solution')}
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          {t('projects.amotrack.solution')}
        </p>
      </div>

      {/* Project Outcome */}
      <div>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3'>
          {t('projects.amotrack.outcomeTitle')}
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          {t('projects.amotrack.outcome')}
        </p>
      </div>
    </div>
  );
};
