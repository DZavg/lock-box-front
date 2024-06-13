import type { ProjectsPage } from '@/global/types/api/project/ProjectsPage'
import getProjects from '@/stories/data/projects'

export const projectsPageData: ProjectsPage = {
	projects: getProjects(),
}
