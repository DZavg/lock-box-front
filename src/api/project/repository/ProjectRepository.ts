import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import { type ProjectsSlugPage } from '@/api/project/entity/ProjectsSlugPage'
import type { ProjectDto } from '@/api/project/dto/project.dto'
import type { Project } from '@/api/project/entity/Project'
import type { Message } from '@/global/types/api/message/Message'

export interface ProjectRepository {
	baseUrl: string

	getAll(): Promise<Project[]>
	getOneById(id: number | string): Promise<ProjectsSlugPage>
	create(project: ProjectDto): Promise<Project>
	deleteOneById(id: number | string): Promise<Message>
}

export class ProjectRepositoryImpl extends BaseHttpClient implements ProjectRepository {
	baseUrl = 'projects/'

	async getAll(): Promise<Project[]> {
		return await this.httpClient.get(`${this.baseUrl}`)
	}

	async getOneById(id: number | string): Promise<ProjectsSlugPage> {
		return await this.httpClient.get(`${this.baseUrl}${id}`)
	}

	async create(project: ProjectDto): Promise<Project> {
		return await this.httpClient.post(`${this.baseUrl}`, project)
	}

	async deleteOneById(id: string | number): Promise<Message> {
		return await this.httpClient.delete(`${this.baseUrl}${id}`)
	}
}
