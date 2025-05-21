import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProfessionalDevCardProps {
  title: string;
  sections: Array<{
    title: string;
    description: string;
  }>;
  delay?: number;
}

export const ProfessionalDevCard = ({ 
  title, 
  sections, 
  delay = 0.4 
}: ProfessionalDevCardProps) => {
  return (
    <motion.div
      className='bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-100 education-item md:col-span-2'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className='flex items-start'>
        <div className='flex-shrink-0 mr-4'>
          <div className='p-2 bg-blue-100 rounded-full'>
            <Award size={24} className='text-blue-600' />
          </div>
        </div>
        <div className='flex-1'>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>
            {title}
          </h3>

          <div className='grid md:grid-cols-3 gap-4'>
            {sections.map((section, index) => (
              <div key={index} className='bg-blue-50 p-3 rounded-lg'>
                <h4 className='text-sm font-medium text-blue-600 mb-1'>
                  {section.title}
                </h4>
                <p className='text-xs text-gray-700'>
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};