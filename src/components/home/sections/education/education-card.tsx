
import { GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import type { EducationCardProps } from "../../../../interface/education"


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
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-100 education-item hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-${badgeColor}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
      ></div>

      <div className="flex flex-col md:flex-row md:items-start">
        <div className="flex-shrink-0 md:mr-4 flex justify-center md:justify-start mb-4 md:mb-0">
          <div
            className={`p-2 bg-${badgeColor}-100 rounded-full group-hover:bg-${badgeColor}-200 transition-colors duration-300`}
          >
            <GraduationCap size={24} className={`text-${badgeColor}-600`} />
          </div>
        </div>
        <div className="md:max-w-[85%]">
          <h3
            className={`text-xl font-semibold ${notCompleted ? "text-gray-600 italic" : "text-gray-900"} mb-1 text-center md:text-left group-hover:text-${badgeColor}-700 transition-colors duration-300`}
          >
            {title}
            {notCompleted && <span className="text-xs ml-1">(Not completed)</span>}
          </h3>
          <p className={`text-sm text-${badgeColor}-600 mb-1 text-center md:text-left`}>{institution}</p>
          <p className="text-xs text-gray-600 mb-3 text-center md:text-left">{period}</p>

          <div className="bg-gray-50 p-3 rounded-lg mb-3 group-hover:bg-gray-100 transition-colors duration-300">
            <h4 className="text-sm font-medium text-gray-800 mb-2 text-center md:text-left">{courseworkTitle}</h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {courseworks.map((course, index) => (
                <motion.span
                  key={index}
                  className={`text-xs bg-${badgeColor}-50 text-${badgeColor}-700 px-2 py-1 rounded-full hover:bg-${badgeColor}-100 transition-colors duration-200 cursor-default`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

          <p className={`text-xs text-gray-700 ${notCompleted ? "italic" : ""} text-center md:text-left`}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}