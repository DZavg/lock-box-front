import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import { type ProjectsPage } from '@/global/types/api/project/ProjectsPage'
import { type ProjectsSlugPage } from '@/global/types/api/project/ProjectsSlugPage'

export interface ProjectRepository {
	baseUrl: string

	getAll(): Promise<ProjectsPage[]>

	getOneById(id: number | string): Promise<ProjectsSlugPage>
}

export class ProjectRepositoryImpl extends BaseHttpClient implements ProjectRepository {
	baseUrl = 'project/'

	async getAll(): Promise<ProjectsPage[]> {
		return await this.httpClient.get(`${this.baseUrl}`)
	}

	async getOneById(id: number | string): Promise<ProjectsSlugPage> {
		return await this.httpClient.get(`${this.baseUrl}${id}`)
	}
}
