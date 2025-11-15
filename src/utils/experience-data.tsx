import { FaWindows, FaApple, FaNetworkWired } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";
import {
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiFastify,
  SiStorybook,
  SiNodedotjs,
  SiStyledcomponents,
  SiDrizzle,
  SiPhp,
  SiLaravel,
} from "react-icons/si";
import { BsStars } from "react-icons/bs";
import type { Experience } from "../interface/experience";

export const experienceData: Experience[] = [
  {
    roleKey: "experience.roles.softwareDeveloperIntern",
    companyKey: "experience.companies.amotek",
    periodKey: "experience.periods.amotekInternship",
    typeKey: "experience.types.internship",
    descriptionKey: "experience.descriptions.amotekInternship",
    responsibilitiesKeys: [
      "experience.responsibilities.amotekInternship.0",
      "experience.responsibilities.amotekInternship.1",
      "experience.responsibilities.amotekInternship.2",
      "experience.responsibilities.amotekInternship.3",
    ],
    technologies: [
      { name: "React", icon: <SiReact className="text-blue-500" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-700" />,
      },
      { name: "Fastify", icon: <SiFastify className="text-gray-800" /> },
      { name: "Storybook", icon: <SiStorybook className="text-pink-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      {
        name: "Styled-components",
        icon: <SiStyledcomponents className="text-pink-500" />,
      },
      { name: "Drizzle ORM", icon: <SiDrizzle className="text-amber-500" /> },
    ],
    featured: true,
  },
  {
    roleKey: "experience.roles.softwareEngineer",
    companyKey: "experience.companies.mymmo",
    periodKey: "experience.periods.mymmoStudentJob",
    typeKey: "experience.types.studentJob",
    descriptionKey: "experience.descriptions.mymmoStudentJob",
    responsibilitiesKeys: [
      "experience.responsibilities.mymmoStudentJob.0",
      "experience.responsibilities.mymmoStudentJob.1",
      "experience.responsibilities.mymmoStudentJob.2",
      "experience.responsibilities.mymmoStudentJob.3",
    ],
    technologies: [
      { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
      { name: "AI Tools", icon: <BsStars className="text-purple-500" /> },
    ],
    featured: true,
  },
  {
    roleKey: "experience.roles.itSupportSpecialist",
    companyKey: "experience.companies.beego",
    periodKey: "experience.periods.beegoStudentJob",
    typeKey: "experience.types.studentJob",
    descriptionKey: "experience.descriptions.beegoStudentJob",
    responsibilitiesKeys: [
      "experience.responsibilities.beegoStudentJob.0",
      "experience.responsibilities.beegoStudentJob.1",
      "experience.responsibilities.beegoStudentJob.2",
      "experience.responsibilities.beegoStudentJob.3",
    ],
    technologies: [
      {
        name: "Windows",
        icon: <FaWindows className="text-blue-500" />,
      },
      { name: "macOS", icon: <FaApple className="text-gray-700" /> },
      {
        name: "Networking",
        icon: <FaNetworkWired className="text-gray-500" />,
      },
    ],
    featured: false,
  },
  {
    roleKey: "experience.roles.ictSupportSpecialist",
    companyKey: "experience.companies.techSupportCo",
    periodKey: "experience.periods.techSupportCoStudentJob",
    typeKey: "experience.types.studentJob",
    descriptionKey: "experience.descriptions.techSupportCoStudentJob",
    responsibilitiesKeys: [
      "experience.responsibilities.techSupportCoStudentJob.0",
      "experience.responsibilities.techSupportCoStudentJob.1",
      "experience.responsibilities.techSupportCoStudentJob.2",
      "experience.responsibilities.techSupportCoStudentJob.3",
    ],
    technologies: [
      {
        name: "Hardware",
        icon: <IoHardwareChip className="text-orange-500" />,
      },
      {
        name: "Networking",
        icon: <FaNetworkWired className="text-gray-500" />,
      },
      {
        name: "Windows",
        icon: <FaWindows className="text-blue-500" />,
      },
    ],
    featured: false,
  },
];
