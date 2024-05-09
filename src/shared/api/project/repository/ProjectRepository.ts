import { type Project } from '@/shared/model/types/Project/Project'
import { BaseHttpClient } from '@/shared/api/client/repository/BaseRepository'

export interface ProjectRepository {
	baseUrl: string

	getAll(): Promise<Project[]>

	getOneById(id: number | string): Promise<Project>
}

export class ProjectRepositoryImpl extends BaseHttpClient implements ProjectRepository {
	baseUrl = 'project/'

	async getOneById(id: number | string): Promise<Project> {
		return await this.httpClient.get(`${this.baseUrl}${id}`)
	}

	async getAll(): Promise<Project[]> {
		return await this.httpClient.get(`${this.baseUrl}`)
	}
}
