import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  title: string;
  institution: string;
  period: string;
  description: string;
  courseworks: string[];
  courseworkTitle: string;
  notCompleted?: boolean;
  delay?: number;
  badgeColor: 'indigo' | 'purple';
}

export const EducationCard = ({
  title,
  institution,
  period,
  description,
  courseworks,
  courseworkTitle,
  notCompleted = false,
  delay = 0,
  badgeColor = 'indigo'
}: EducationCardProps) => {
  return (
    <motion.div
      className='bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-100 education-item'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className='flex items-start'>
        <div className='flex-shrink-0 mr-4'>
          <div className={`p-2 bg-${badgeColor}-100 rounded-full`}>
            <GraduationCap size={24} className={`text-${badgeColor}-600`} />
          </div>
        </div>
        <div>
          <h3 className={`text-xl font-semibold ${notCompleted ? 'text-gray-600 italic' : 'text-gray-900'} mb-1`}>
            {title}
            {notCompleted && <span className='text-xs ml-1'>(Not completed)</span>}
          </h3>
          <p className={`text-sm text-${badgeColor}-600 mb-1`}>
            {institution}
          </p>
          <p className='text-xs text-gray-600 mb-3'>
            {period}
          </p>

          <div className='bg-gray-50 p-3 rounded-lg mb-3'>
            <h4 className='text-sm font-medium text-gray-800 mb-2'>
              {courseworkTitle}
            </h4>
            <div className='flex flex-wrap gap-2'>
              {courseworks.map((course, index) => (
                <span 
                  key={index} 
                  className={`text-xs bg-${badgeColor}-50 text-${badgeColor}-700 px-2 py-1 rounded-full`}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          <p className={`text-xs text-gray-700 ${notCompleted ? 'italic' : ''}`}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};