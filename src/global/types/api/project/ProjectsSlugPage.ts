import { type Project } from '@/global/types/api/project/Project'
import { type Access } from '@/global/types/api/access/Access'

export interface ProjectsSlugPage extends Project {
	accesses: Access[]
}
