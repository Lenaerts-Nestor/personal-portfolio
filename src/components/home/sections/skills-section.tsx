import { motion } from 'framer-motion';

import { SectionHeading } from '../../shared/layout/section-heading';
import { skills_containerVariants, skills_itemVariants, skills_skillCategories, skills_skillVariants } from '../../../utils/skills-data';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';



export const TechnologiesSection = () => {
  const sectionRef = useScrollAnimation({ 
    animationType: 'slide-left',
    threshold: 0.2 
  });
  return (
    <section
      ref={sectionRef}
      id='technologies'
      className='py-16 bg-white dark:bg-gray-900 overflow-hidden'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <SectionHeading
          title='Technical Skills'
          description='My expertise in modern web development technologies and professional competencies'
        />

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'
          variants={skills_containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills_skillCategories.map((category, _index) => (
            <motion.div
              key={category.title}
              className='relative h-full'
              variants={skills_itemVariants}
            >
              <div
                className={`h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 ${category.lightColor} backdrop-blur-sm`}
              >
                {/* Header */}
                <div
                  className={`${category.darkColor} px-6 py-4 flex items-center gap-3`}
                >
                  <div className='p-2 bg-white/20 rounded-lg text-white'>
                    {category.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className='p-5'>
                  <motion.div
                    className='grid grid-cols-2 sm:grid-cols-3 gap-3'
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.03,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.key}
                        className={`flex items-center p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-${category.color}-300 dark:hover:border-${category.color}-500`}
                        variants={skills_skillVariants}
                      >
                        {skill.icon ? (
                          <div
                            className={`text-${category.color}-500 flex items-center`}
                          >
                            {skill.icon}
                          </div>
                        ) : (
                          <div
                            className={`w-5 h-5 mr-2 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/50 border border-${category.color}-200 dark:border-${category.color}-700`}
                          ></div>
                        )}
                        <span className='text-sm font-medium text-gray-700 dark:text-gray-200 truncate'>
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
