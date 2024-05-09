import { type Project } from '@/shared/model/types/Project/Project'
import { type Access } from '@/shared/model/types/Access/Access'

export interface ProjectsPage extends Project {
	accesses: Access[]
}
