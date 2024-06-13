import type { ProjectsPage } from '@/model/types/Project/ProjectsPage'
import getProjects from '@/stories/data/projects'

export const projectsPageData: ProjectsPage = {
	projects: getProjects(),
}
