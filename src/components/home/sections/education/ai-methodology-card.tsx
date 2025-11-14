import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { useI18n } from '../../../shared/i18nContext';
import { typography } from '../../../../constants';

export const AIMethodologyCard = ({ delay = 0.4 }) => {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="md:col-span-2"
    >
      <Card variant="default" padding="md" className="border-purple-200 dark:border-purple-800">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className={`${typography.heading.h4} text-gray-900 dark:text-gray-100`}>
              {t('education.aiMethodology.title')}
            </h3>
            <p className={`${typography.body.sm} text-purple-600 dark:text-purple-400 font-medium`}>
              {t('education.aiMethodology.subtitle')}
            </p>
          </div>
        </div>

        <p className={`${typography.body.sm} text-gray-700 dark:text-gray-300 mb-4`}>
          {t('education.aiMethodology.intro')}
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className={`${typography.label.base} text-purple-700 dark:text-purple-300 mb-2`}>
              {t('education.aiMethodology.sections.blueprint.title')}
            </h4>
            <p className={`${typography.body.xs} text-gray-600 dark:text-gray-400`}>
              {t('education.aiMethodology.sections.blueprint.description')}
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className={`${typography.label.base} text-purple-700 dark:text-purple-300 mb-2`}>
              {t('education.aiMethodology.sections.strategic.title')}
            </h4>
            <p className={`${typography.body.xs} text-gray-600 dark:text-gray-400`}>
              {t('education.aiMethodology.sections.strategic.description')}
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className={`${typography.label.base} text-purple-700 dark:text-purple-300 mb-2`}>
              {t('education.aiMethodology.sections.understanding.title')}
            </h4>
            <p className={`${typography.body.xs} text-gray-600 dark:text-gray-400`}>
              {t('education.aiMethodology.sections.understanding.description')}
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-l-4 border-purple-500">
          <p className={`${typography.body.xs} text-gray-700 dark:text-gray-300 italic`}>
            {t('education.aiMethodology.clarification')}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};
