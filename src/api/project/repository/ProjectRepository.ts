import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { Project } from '@/api/project/entity/Project'
import type { Message } from '@/global/types/api/message/Message'
import type { ProjectsSlugPage } from '@/api/project/entity/ProjectsSlugPage'
import type { AccessDto } from '@/api/access/dto/access.dto'
import type { UpdateProjectDto } from '@/api/project/dto/update-project.dto'
import type { ProjectDto } from '@/api/project/dto/project.dto'
import type { ProjectsPage } from '@/api/project/entity/ProjectsPage'

export interface ProjectRepository {
	baseUrl: string

	getAll(query: string): Promise<ProjectsPage>
	getOneById(id: string): Promise<Project>
	create(project: ProjectDto): Promise<Message>
	updateOneById(id: string, project: UpdateProjectDto): Promise<Message>
	deleteOneById(id: string): Promise<Message>
	getAllAccessesById(id: string): Promise<ProjectsSlugPage>
	createAccessById(id: string, access: AccessDto): Promise<Message>
}

export class ProjectRepositoryImpl extends BaseHttpClient implements ProjectRepository {
	baseUrl = 'projects/'

	async getAll(query: string = ''): Promise<ProjectsPage> {
		return await this.httpClient.get(
			`${this.baseUrl}`,
			query
				? {
						params: {
							query,
						},
					}
				: {},
		)
	}

	async getOneById(id: string): Promise<Project> {
		return await this.httpClient.get(`${this.baseUrl}${id}`)
	}

	async create(project: ProjectDto): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}`, project)
	}

	async updateOneById(id: string, project: UpdateProjectDto): Promise<Message> {
		return await this.httpClient.patch(`${this.baseUrl}${id}`, project)
	}

	async deleteOneById(id: string): Promise<Message> {
		return await this.httpClient.delete(`${this.baseUrl}${id}`)
	}

	async getAllAccessesById(id: string): Promise<ProjectsSlugPage> {
		return await this.httpClient.get(`${this.baseUrl}${id}/accesses`)
	}

	async createAccessById(id: string, access: AccessDto): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}${id}/accesses`, access)
	}
}
