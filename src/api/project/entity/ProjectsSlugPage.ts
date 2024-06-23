import { type Project } from '@/api/project/entity/Project'
import { type Access } from '@/global/types/api/access/Access'

export interface ProjectsSlugPage extends Project {
	accesses: Access[]
}
