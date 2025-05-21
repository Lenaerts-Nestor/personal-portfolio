
import { Award } from "lucide-react"
import { motion } from "framer-motion"
import type { ProfessionalDevCardProps } from "../../../../interface/education"

export const ProfessionalDevCard = ({ title, sections, delay = 0.4 }: ProfessionalDevCardProps) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-100 education-item md:col-span-2 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      <div className="flex flex-col md:flex-row md:items-start">
        <div className="flex-shrink-0 md:mr-4 flex justify-center md:justify-start mb-4 md:mb-0">
          <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
            <Award size={24} className="text-blue-600" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center md:text-left group-hover:text-blue-700 transition-colors duration-300">
            {title}
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <h4 className="text-sm font-medium text-blue-600 mb-1 text-center md:text-left">{section.title}</h4>
                <p className="text-xs text-gray-700 text-center md:text-left">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
