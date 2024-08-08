import { type Project } from '@/api/project/entity/Project'

export interface ProjectsPage {
	projects: Project[]
	total_count: number
}
