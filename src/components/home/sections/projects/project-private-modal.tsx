import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock } from "lucide-react";
import { AmoTrackSummary } from "../../../../utils/project-summaries/amotrack-summary";
import { CvoSummary } from "../../../../utils/project-summaries/cvo-summary";
import type { ProjectModalProps } from "../../../../interface/project";
import { PROJECT_IDS } from "../../../../constants";

// Project Summary Component Map - Add new private projects here
const PROJECT_SUMMARIES: Record<string, React.ComponentType> = {
  [PROJECT_IDS.AMOTRACK]: AmoTrackSummary,
  [PROJECT_IDS.CVO]: CvoSummary,
  // Future private projects:
  // [PROJECT_IDS.NEW_PROJECT]: NewProjectSummary,
};

export const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);

      // Enhanced scroll lock with scrollbar compensation
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.touchAction = "none"; // Prevent mobile scrolling
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  // Get the appropriate summary component for this project
  const SummaryComponent = PROJECT_SUMMARIES[project.id];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl max-h-[92vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
            initial={{ scale: 0.96, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 400,
              mass: 0.8,
            }}
          >
            {/* Project Header with Image */}
            <div className="relative w-full h-64 sm:h-80 bg-gray-100 dark:bg-gray-700">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                  </h2>
                  <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Private Badge */}
              {project.isPrivate && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/90 text-white rounded-full">
                  <Lock className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">Private Project</span>
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {SummaryComponent ? (
                <SummaryComponent />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    Project details not available.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800">
              {project.isPrivate ? (
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <Lock className="h-4 w-4 mr-1" />
                  Private repository - Code available upon request
                </span>
              ) : (
                <a
                  href={project.githubLink || `https://github.com/username/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium flex items-center"
                >
                  <svg
                    className="h-5 w-5 mr-1.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
