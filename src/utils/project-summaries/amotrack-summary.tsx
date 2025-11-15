import { useI18n } from "../../components/shared/i18nContext";
import {
  SiReact,
  SiTypescript,
  SiFastify,
  SiPostgresql,
  SiDrizzle,
  SiNodedotjs,
  SiSwagger,
  SiGit,
} from "react-icons/si";
import { TechnologyBadge } from "../../components/ui";

const techStack = [
  { name: "React", icon: SiReact, color: "text-sky-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  {
    name: "Fastify",
    icon: SiFastify,
    color: "text-gray-800 dark:text-gray-200",
  },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Drizzle ORM", icon: SiDrizzle, color: "text-amber-500" },
  { name: "Swagger", icon: SiSwagger, color: "text-green-600" },
  { name: "Git", icon: SiGit, color: "text-red-600" },
] as const;

export const AmoTrackSummary = () => {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {t("projects.amotrack.overviewTitle") || "Project Overview"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.amotrack.overview") ||
            "A comprehensive timesheet management system built for professional services and educational environments. AmoTrack streamlines time tracking, project management, and reporting workflows with an intuitive interface and robust backend infrastructure."}
        </p>
      </div>

      {/* Technologies Used */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.amotrack.technologiesTitle") || "Technology Stack"}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {techStack.map((tech, index) => (
            <TechnologyBadge
              key={index}
              tech={tech.name}
              icon={tech.icon}
              iconColor={tech.color}
            />
          ))}
        </div>
      </div>

      {/* Key Features */}
      {/** currently removed, this project has no key features. gotta contact amotek again to ask what it was */}
      {/* Technical Architecture */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.amotrack.architectureTitle") || "Technical Architecture"}
        </h3>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t("projects.amotrack.frontendTitle") || "Frontend"}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("projects.amotrack.frontendDescription") ||
              "Built with React and TypeScript for type-safe, component-based development. The UI features responsive design patterns, state management, and optimized rendering for smooth user experience across devices."}
          </p>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t("projects.amotrack.backendTitle") || "Backend"}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            {t("projects.amotrack.backendDescription") ||
              "Powered by Node.js with Fastify for high-performance API routing. PostgreSQL database managed through Drizzle ORM ensures type-safe database operations. Comprehensive API documentation via Swagger enables seamless third-party integrations."}
          </p>
        </div>
      </div>

      {/* My Contributions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.amotrack.contributionsTitle") ||
            "My Role & Responsibilities"}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            {t("projects.amotrack.contributions.frontend") ||
              "Designed and implemented the complete frontend architecture using React and TypeScript"}
          </li>
          <li>
            {t("projects.amotrack.contributions.backend") ||
              "Built scalable backend services with Node.js, Fastify, and PostgreSQL"}
          </li>
          <li>
            {t("projects.amotrack.contributions.database") ||
              "Designed database schema and implemented type-safe ORM layer with Drizzle"}
          </li>
          <li>
            {t("projects.amotrack.contributions.api") ||
              "Created comprehensive RESTful API with Swagger documentation"}
          </li>
          <li>
            {t("projects.amotrack.contributions.deployment") ||
              "Managed version control, deployment workflows, and project documentation"}
          </li>
        </ul>
      </div>

      {/* Technical Challenges */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.technicalChallenge") || "Technical Challenge:"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("projects.amotrack.challenge") ||
            "The primary challenge was designing a flexible, scalable database schema that could handle complex time-tracking scenarios while maintaining performance. Balancing real-time updates with data consistency and implementing efficient query patterns required careful architectural planning."}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.solution") || "Solution:"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.amotrack.solution") ||
            "I implemented a normalized database design with Drizzle ORM for type-safe queries, combined with optimized indexing strategies. The Fastify framework provided excellent performance for real-time operations, while React's component architecture enabled efficient UI updates and state management."}
        </p>
      </div>

      {/* Project Outcome */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.amotrack.outcomeTitle") || "Project Outcome"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.amotrack.outcome") ||
            "AmoTrack successfully streamlines timesheet management with an intuitive interface and powerful backend. The system provides reliable time tracking, comprehensive reporting capabilities, and seamless integration options through its well-documented API. The full-stack TypeScript approach ensures maintainability and type safety throughout the application."}
        </p>
      </div>
    </div>
  );
};
