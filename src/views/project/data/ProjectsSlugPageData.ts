import type { ProjectsSlugPage } from '@/global/types/api/project/ProjectsSlugPage'
import getAccesses from '@/stories/data/access'

export const projectsSlugPageData: ProjectsSlugPage = {
	accesses: getAccesses(),
	id: '0',
	title: 'Бренд одежды "IVOLGA"',
	domain: 'ivolga.moscow',
}
