import type { ProjectsSlugPage } from '@/api/project/entity/ProjectsSlugPage'
import getAccesses from '@/global/mock/access'
import getProjects from '@/global/mock/projects'

export const projectsSlugPageData: ProjectsSlugPage = {
	accesses: getAccesses(),
	project: getProjects()[0],
}
