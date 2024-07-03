import { type Project } from '@/api/project/entity/Project'
import { type Access } from '@/api/access/entity/Access'

export interface ProjectsSlugPage {
	accesses: Access[]
	project: Project
}
