import { type Project } from '@/shared/model/types/Project/Project'
import { type ProjectRepository } from '@/shared/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/shared/api/constants/identifiers'

export interface GetAll {
	readonly projectRepository: ProjectRepository

	execute(): Promise<Project[]>
}

@injectable()
export class GetAllImpl implements GetAll {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(): Promise<Project[]> {
		return await this.projectRepository.getAll()
	}
}
