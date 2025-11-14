
import { GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import type { EducationCardProps } from "../../../../interface/education"
import { typography } from "../../../../constants"

// Color mapping for education badges (fixed - no dynamic classes)
const colorSchemes = {
  indigo: {
    topBar: 'bg-indigo-500',
    iconBg: 'bg-indigo-100 group-hover:bg-indigo-200',
    icon: 'text-indigo-600',
    titleHover: 'group-hover:text-indigo-700',
    institution: 'text-indigo-600 dark:text-indigo-400',
    badgeBg: 'bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
  },
  blue: {
    topBar: 'bg-blue-500',
    iconBg: 'bg-blue-100 group-hover:bg-blue-200',
    icon: 'text-blue-600',
    titleHover: 'group-hover:text-blue-700',
    institution: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50',
    badgeText: 'text-blue-700 dark:text-blue-300',
  },
  purple: {
    topBar: 'bg-purple-500',
    iconBg: 'bg-purple-100 group-hover:bg-purple-200',
    icon: 'text-purple-600',
    titleHover: 'group-hover:text-purple-700',
    institution: 'text-purple-600 dark:text-purple-400',
    badgeBg: 'bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/30 dark:hover:bg-purple-900/50',
    badgeText: 'text-purple-700 dark:text-purple-300',
  },
  green: {
    topBar: 'bg-green-500',
    iconBg: 'bg-green-100 group-hover:bg-green-200',
    icon: 'text-green-600',
    titleHover: 'group-hover:text-green-700',
    institution: 'text-green-600 dark:text-green-400',
    badgeBg: 'bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-900/50',
    badgeText: 'text-green-700 dark:text-green-300',
  },
} as const;

type BadgeColor = keyof typeof colorSchemes;

export const EducationCard = ({
  title,
  institution,
  period,
  description,
  courseworks,
  courseworkTitle,
  notCompleted = false,
  delay = 0,
  badgeColor = "indigo",
}: EducationCardProps) => {
  const colors = colorSchemes[badgeColor as BadgeColor] || colorSchemes.indigo;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700 education-item hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 ${colors.topBar} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
      ></div>

      <div className="flex flex-col md:flex-row md:items-start">
        <div className="flex-shrink-0 md:mr-4 flex justify-center md:justify-start mb-4 md:mb-0">
          <div className={`p-2 ${colors.iconBg} rounded-full transition-colors duration-300`}>
            <GraduationCap size={24} className={colors.icon} />
          </div>
        </div>
        <div className="md:max-w-[85%]">
          <h3
            className={`${typography.heading.h4} ${notCompleted ? "text-gray-600 dark:text-gray-500 italic" : "text-gray-900 dark:text-gray-100"} mb-1 text-center md:text-left ${colors.titleHover} transition-colors duration-300`}
          >
            {title}
            {notCompleted && <span className={`${typography.body.xs} ml-1`}>(Not completed)</span>}
          </h3>
          <p className={`${typography.body.sm} ${colors.institution} mb-1 text-center md:text-left`}>{institution}</p>
          <p className={`${typography.body.xs} text-gray-600 dark:text-gray-400 mb-3 text-center md:text-left`}>{period}</p>

          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-3 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors duration-300">
            <h4 className={`${typography.label.base} text-gray-800 dark:text-gray-200 mb-2 text-center md:text-left`}>{courseworkTitle}</h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {courseworks.map((course, index) => (
                <motion.span
                  key={index}
                  className={`${typography.label.sm} ${colors.badgeBg} ${colors.badgeText} px-2 py-1 rounded-full transition-colors duration-200 cursor-default`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

          <p className={`${typography.body.xs} text-gray-700 dark:text-gray-300 ${notCompleted ? "italic" : ""} text-center md:text-left`}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}