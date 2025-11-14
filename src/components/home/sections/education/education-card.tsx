import { GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import type { EducationCardProps } from "../../../../interface/education"
import { typography } from "../../../../constants"
import { Card } from "../../../ui"

export const EducationCard = ({
  title,
  institution,
  period,
  description,
  courseworks,
  courseworkTitle,
  notCompleted = false,
  delay = 0,
}: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card
        variant={notCompleted ? 'default' : 'featured'}
        padding="md"
        className="h-full flex flex-col"
      >
        <div className='flex items-start gap-4'>
          <div className='flex-shrink-0'>
            <div className='p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg'>
              <GraduationCap className='h-6 w-6 text-indigo-600 dark:text-indigo-400' />
            </div>
          </div>
          <div className='flex-1'>
            <h3
              className={`${typography.heading.h4} ${notCompleted ? "text-gray-600 dark:text-gray-500 italic" : "text-gray-900 dark:text-gray-100"} mb-1 text-left`}
            >
              {title}
              {notCompleted && <span className={`${typography.body.xs} ml-1`}>(Not completed)</span>}
            </h3>
            <p className={`${typography.body.sm} text-indigo-600 dark:text-indigo-400 mb-1 text-left`}>{institution}</p>
            <p className={`${typography.body.xs} text-gray-600 dark:text-gray-400 mb-3 text-left`}>{period}</p>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-3">
              <h4 className={`${typography.label.base} text-gray-800 dark:text-gray-200 mb-2 text-left`}>{courseworkTitle}</h4>
              <div className="flex flex-wrap gap-2">
                {courseworks.map((course, index) => (
                  <span
                    key={index}
                    className={`${typography.label.sm} px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg transition-colors cursor-default`}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <p className={`${typography.body.xs} text-gray-700 dark:text-gray-300 ${notCompleted ? "italic" : ""} text-left`}>
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
