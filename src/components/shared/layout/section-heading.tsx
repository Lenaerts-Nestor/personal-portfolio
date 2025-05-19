'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { gradientTextClasses } from '../../../style/style';

interface SectionHeadingProps {
  title: string;
  description: string;
  icon?: ReactNode;
  dangerouslySetDescriptionHTML?: boolean; // Added new prop
}

export const SectionHeading = ({
  title,
  description,
  icon,
  dangerouslySetDescriptionHTML = false, // Default to false
}: SectionHeadingProps) => {
  return (
    <div className='text-center mb-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className='inline-flex items-center justify-center mb-2'
      >
        {icon && <span className='mr-2 text-indigo-600'>{icon}</span>}
        <h2 className={`text-4xl font-bold ${gradientTextClasses}`}>{title}</h2>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600 mb-8'
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto'
        {...(dangerouslySetDescriptionHTML && {
          dangerouslySetInnerHTML: { __html: description },
        })}
      >
        {!dangerouslySetDescriptionHTML ? description : null}
      </motion.p>
    </div>
  );
};
