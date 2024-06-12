import type { ProjectsSlugPage } from '@/shared/model/types/Project/ProjectsSlugPage'
import getAccesses from '@/shared/stories/data/access'

export const projectsSlugPageData: ProjectsSlugPage = {
	accesses: getAccesses(),
	id: '0',
	title: 'Бренд одежды "IVOLGA"',
	domain: 'ivolga.moscow',
}
