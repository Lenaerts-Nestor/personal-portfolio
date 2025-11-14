import { useI18n } from "../../components/shared/i18nContext";
import { SiPhp, SiLaravel } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { TechnologyBadge } from "../../components/ui";

const techStack = [
  { name: "PHP", icon: SiPhp, color: "text-indigo-600" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
  { name: "AI Tools", icon: BsStars, color: "text-purple-500" },
] as const;

export const MymmoSummary = () => {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {t("projects.mymmo.overviewTitle") || "Project Overview"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.mymmo.overview") ||
            "A software architecture analysis and redesign project for Mymmo, a company seeking to improve their existing microservices-based system. The project focused on analyzing the current architecture, identifying scalability and user-friendliness issues, and proposing simplified solutions through API gateway implementation."}
        </p>
      </div>

      {/* Technologies Used */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.mymmo.technologiesTitle") || "Technology Stack"}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

      {/* Project Context */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.mymmo.contextTitle") || "Project Context"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.mymmo.contextDescription") ||
            "Mymmo is a company with a complex microservices architecture that was becoming difficult to maintain and scale. They hired me as a junior software engineer to analyze their current project structure and propose alternative solutions that would improve scalability and user-friendliness."}
        </p>
      </div>

      {/* My Role & Responsibilities */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.mymmo.contributionsTitle") ||
            "My Role & Responsibilities"}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            {t("projects.mymmo.contributions.item1") ||
              "Analyzed the existing microservices architecture to identify bottlenecks and complexity issues"}
          </li>
          <li>
            {t("projects.mymmo.contributions.item2") ||
              "Designed a simplified software architecture approach using an API gateway pattern"}
          </li>
          <li>
            {t("projects.mymmo.contributions.item3") ||
              "Utilized AI tools to explore different architectural approaches and best practices"}
          </li>
          <li>
            {t("projects.mymmo.contributions.item4") ||
              "Prototyped an API gateway solution using PHP Laravel to demonstrate the proposed approach"}
          </li>
          <li>
            {t("projects.mymmo.contributions.item5") ||
              "Identified potential client types and use cases for the improved architecture"}
          </li>
        </ul>
      </div>

      {/* Technical Challenge */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.technicalChallenge") || "Technical Challenge:"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("projects.mymmo.challenge") ||
            "The project had a lot of microservices which made it difficult to directly understand the overall system architecture. The first major challenge was to comprehend the existing structure, identify the pain points, and then propose a solution that would simplify the architecture without losing functionality. Understanding how different services interacted and how to consolidate them into a more manageable gateway pattern required deep analysis."}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.solution") || "Solution:"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.mymmo.solution") ||
            "I approached the problem systematically by first documenting the existing microservices and their interactions. Using AI tools, I researched various architectural patterns and best practices for simplifying microservices. I then designed a simplified API gateway using PHP Laravel that would serve as a central entry point, reducing complexity while maintaining scalability. The gateway approach helped identify different client types and streamlined the overall system architecture."}
        </p>
      </div>

      {/* Key Achievements */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.mymmo.achievementsTitle") || "Key Achievements"}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            {t("projects.mymmo.achievements.item1") ||
              "Successfully analyzed and documented the complex microservices architecture"}
          </li>
          <li>
            {t("projects.mymmo.achievements.item2") ||
              "Designed a simplified API gateway pattern that improved system comprehension"}
          </li>
          <li>
            {t("projects.mymmo.achievements.item3") ||
              "Demonstrated practical implementation using PHP Laravel"}
          </li>
          <li>
            {t("projects.mymmo.achievements.item4") ||
              "Identified clear client segmentation for better scalability"}
          </li>
        </ul>
      </div>

      {/* Project Outcome */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {t("projects.mymmo.outcomeTitle") || "Project Outcome"}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t("projects.mymmo.outcome") ||
            "The architectural analysis and proposed solution provided Mymmo with a clear roadmap for simplifying their system while maintaining scalability. The API gateway approach using Laravel demonstrated a practical path forward that would improve both developer experience and system maintainability. This project showcased my ability to analyze complex systems, think critically about architecture, and propose practical solutions."}
        </p>
      </div>
    </div>
  );
};
