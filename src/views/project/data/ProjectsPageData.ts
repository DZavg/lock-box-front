import type { ProjectsPage } from '@/global/types/api/project/ProjectsPage'
import getProjects from '@/global/mock/projects'

export const projectsPageData: ProjectsPage = {
	projects: getProjects(),
}
