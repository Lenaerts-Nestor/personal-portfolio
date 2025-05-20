import { useI18n } from "../../components/shared/i18nContext"
import { SiSharp, SiDotnet, SiGoogle, SiSwagger } from "react-icons/si"

// Tech stack with icons and colors
const techIcons = {
  "C#": { icon: SiSharp, color: "text-purple-600" },
  ".NET": { icon: SiDotnet, color: "text-purple-700" },
  "Google APIs": { icon: SiGoogle, color: "text-red-500" },
  Swagger: { icon: SiSwagger, color: "text-green-600" },
}

export const CvoSummary = () => {
  const { t } = useI18n()

  // Render tech icon
  const renderTechIcon = (tech: string) => {
    const iconData = techIcons[tech as keyof typeof techIcons]
    if (iconData) {
      const IconComponent = iconData.icon
      return <IconComponent className={`h-5 w-5 ${iconData.color}`} />
    }
    return null
  }

  return (
    <div className="space-y-6">
      {/* Project Overview */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {t("projects.cvo.overviewTitle") || "Project Overview"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.cvo.overview") ||
            "A backend-focused automation project for CVO Antwerpen School, designed to optimize and automate core administrative processes. The system streamlines student registration, account creation, user management (students, teachers, admins), and dynamically links courses to teachers and students, with deep Google API integration."}
        </p>
      </div>

      {/* Technologies Used */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.cvo.technologiesTitle") || "Technology Stack"}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["C#", ".NET", "Google APIs", "Swagger"].map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-lg"
            >
              {renderTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.cvo.featuresTitle") || "Key Features"}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            {t("projects.cvo.features.item1") ||
              "Automated student registration and account creation"}
          </li>
          <li>
            {t("projects.cvo.features.item2") ||
              "Role-based user management (students, teachers, admins)"}
          </li>
          <li>
            {t("projects.cvo.features.item3") ||
              "Dynamic linking of courses to teachers and students"}
          </li>
          <li>
            {t("projects.cvo.features.item4") ||
              "Full Google Classroom automation (classroom creation, course linking, assignment management)"}
          </li>
          <li>
            {t("projects.cvo.features.item5") ||
              "Automated Google account management for students and teachers"}
          </li>
          <li>
            {t("projects.cvo.features.item6") ||
              "Secure RESTful API endpoints for all automated processes"}
          </li>
        </ul>
      </div>

      {/* Technical Architecture */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.cvo.architectureTitle") || "Technical Architecture"}
        </h3>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t("projects.cvo.backendApiIntegrationTitle") ||
              "Backend & API Integration"}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            {t("projects.cvo.backendApiIntegrationDescription") ||
              "The system is built in C# with custom API models and services, focusing on secure, scalable backend logic. Extensive Google API integration (Classroom, Directory, Gmail) automates educational workflows and user management. Data serialization, email handling, and web automation libraries support robust, automated operations."}
          </p>
        </div>
      </div>

      {/* My Contributions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.cvo.contributionsTitle") || "My Role & Responsibilities"}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            {t("projects.cvo.contributions.item1") ||
              "Led the development of Google API integration (Classroom, Directory, Gmail)"}
          </li>
          <li>
            {t("projects.cvo.contributions.item2") ||
              "Connected school system with Google accounts for seamless automation"}
          </li>
          <li>
            {t("projects.cvo.contributions.item3") ||
              "Automated Google Classroom creation, course linking, and user assignments"}
          </li>
          <li>
            {t("projects.cvo.contributions.item4") ||
              "Designed and implemented secure RESTful endpoints for all automated processes"}
          </li>
          <li>
            {t("projects.cvo.contributions.item5") ||
              "Conducted extensive research on Google API documentation and best practices"}
          </li>
          <li>
            {t("projects.cvo.contributions.item6") ||
              "Ensured secure coding and efficient data flow throughout the project"}
          </li>
        </ul>
      </div>

      {/* Technical Challenges */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.technicalChallenge") || "Technical Challenge:"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("projects.cvo.challenge") ||
            "The most significant challenge was thoroughly reading and interpreting the extensive Google API documentation to identify robust, secure integration patterns. Secure coding practices and careful architectural decisions were essential to ensure data privacy and system reliability."}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.solution") || "Solution:"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.cvo.solution") ||
            "I implemented a modular, secure backend architecture with custom C# services and models, leveraging Google APIs for automation. Security was prioritized at every step, and RESTful endpoints were designed for maintainability and extensibility."}
        </p>
      </div>

      {/* Project Outcome */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.cvo.outcomeTitle") || "Project Outcome"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.cvo.outcome") ||
            "The CVO Antwerpen automation system was successfully implemented, significantly reducing administrative overhead and streamlining educational workflows. The integration with Google services created a seamless experience for students and teachers, while the secure backend architecture ensured data privacy and system reliability."}
        </p>
      </div>
    </div>
  )
}
