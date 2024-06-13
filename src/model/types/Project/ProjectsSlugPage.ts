import { type Project } from '@/model/types/Project/Project'
import { type Access } from '@/model/types/Access/Access'

export interface ProjectsSlugPage extends Project {
	accesses: Access[]
}
