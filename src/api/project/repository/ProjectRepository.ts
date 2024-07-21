import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { Project } from '@/api/project/entity/Project'
import type { Message } from '@/global/types/api/message/Message'
import type { ProjectsSlugPage } from '@/api/project/entity/ProjectsSlugPage'
import type { AccessDto } from '@/api/access/dto/access.dto'
import type { UpdateProjectDto } from '@/api/project/dto/update-project.dto'
import type { ProjectDto } from '@/api/project/dto/project.dto'

export interface ProjectRepository {
	baseUrl: string

	getAll(): Promise<Project[]>
	getOneById(id: number | string): Promise<Project>
	create(project: ProjectDto): Promise<Message>
	update(id: number | string, project: UpdateProjectDto): Promise<Message>
	deleteOneById(id: number | string): Promise<Message>
	getAllAccesses(id: number | string): Promise<ProjectsSlugPage>
	createAccess(id: number | string, access: AccessDto): Promise<Message>
}

export class ProjectRepositoryImpl extends BaseHttpClient implements ProjectRepository {
	baseUrl = 'projects/'

	async getAll(): Promise<Project[]> {
		return await this.httpClient.get(`${this.baseUrl}`)
	}

	async getOneById(id: number | string): Promise<Project> {
		return await this.httpClient.get(`${this.baseUrl}${id}`)
	}

	async create(project: ProjectDto): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}`, project)
	}

	async update(id: number | string, project: UpdateProjectDto): Promise<Message> {
		return await this.httpClient.patch(`${this.baseUrl}${id}`, project)
	}

	async deleteOneById(id: string | number): Promise<Message> {
		return await this.httpClient.delete(`${this.baseUrl}${id}`)
	}

	async getAllAccesses(id: string | number): Promise<ProjectsSlugPage> {
		return await this.httpClient.get(`${this.baseUrl}${id}/accesses`)
	}

	async createAccess(id: number | string, access: AccessDto): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}${id}/accesses`, access)
	}
}
