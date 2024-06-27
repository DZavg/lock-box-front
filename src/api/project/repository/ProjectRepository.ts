import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import { type ProjectsPage } from '@/api/project/entity/ProjectsPage'
import { type ProjectsSlugPage } from '@/api/project/entity/ProjectsSlugPage'
import type { ProjectDto } from '@/api/project/dto/project.dto'
import type { Project } from '@/api/project/entity/Project'

export interface ProjectRepository {
	baseUrl: string

	getAll(): Promise<ProjectsPage>
	getOneById(id: number | string): Promise<ProjectsSlugPage>
	create(project: ProjectDto): Promise<Project>
}

export class ProjectRepositoryImpl extends BaseHttpClient implements ProjectRepository {
	baseUrl = 'projects/'

	async getAll(): Promise<ProjectsPage> {
		return await this.httpClient.get(`${this.baseUrl}`)
	}

	async getOneById(id: number | string): Promise<ProjectsSlugPage> {
		return await this.httpClient.get(`${this.baseUrl}${id}`)
	}

	async create(project: ProjectDto): Promise<Project> {
		return await this.httpClient.post(`${this.baseUrl}`, project)
	}
}
