import type { ProjectsPage } from '@/api/project/entity/ProjectsPage'
import getProjects from '@/global/mock/projects'

export const projectsPageData: ProjectsPage = {
	projects: getProjects(),
}
