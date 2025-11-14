/**
 * Project IDs matching the project data in utils/projects-data.tsx
 * These IDs are used for routing, translation keys, and special rendering logic
 */
export const PROJECT_IDS = {
  AMOTRACK: 'amotrack',
  TIMESHEET: 'timesheet',
  CVO: 'cvo',
  MYMMO: 'mymmo',
  WEBDEV: 'webdev',
  GAME: 'game',
  WEBAPI: 'webapi',
  PARKFLOW: 'parkflow',
  CARINFO: 'carinfo',
} as const;

/**
 * Type-safe project ID type
 */
export type ProjectId = typeof PROJECT_IDS[keyof typeof PROJECT_IDS];

/**
 * Projects that have custom summary components in the modal
 * These projects display special content when opened:
 * - TIMESHEET: Shows AmoTrackSummary component
 * - CVO: Shows CvoSummary component
 */
export const PROJECTS_WITH_CUSTOM_SUMMARY: readonly ProjectId[] = [
  PROJECT_IDS.TIMESHEET,
  PROJECT_IDS.CVO,
  PROJECT_IDS.MYMMO,
] as const;

/**
 * Projects that display a custom type label instead of the default type
 * Currently only TIMESHEET shows "Internship Project" instead of its type
 */
export const PROJECTS_WITH_CUSTOM_TYPE_LABEL: readonly ProjectId[] = [
  PROJECT_IDS.TIMESHEET,
] as const;

/**
 * Helper function to check if a project has a custom summary
 */
export const hasCustomSummary = (projectId: string): boolean => {
  return PROJECTS_WITH_CUSTOM_SUMMARY.includes(projectId as ProjectId);
};

/**
 * Helper function to check if a project has a custom type label
 */
export const hasCustomTypeLabel = (projectId: string): boolean => {
  return PROJECTS_WITH_CUSTOM_TYPE_LABEL.includes(projectId as ProjectId);
};
