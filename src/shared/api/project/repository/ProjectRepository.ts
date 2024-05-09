import { BaseHttpClient } from '@/shared/api/client/repository/BaseRepository'
import { type ProjectsPage } from '@/shared/model/types/Project/ProjectsPage'
import { type ProjectsSlugPage } from '@/shared/model/types/Project/ProjectsSlugPage'

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
