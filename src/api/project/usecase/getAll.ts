import { type ProjectRepository } from '@/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import { type ProjectsPage } from '@/api/project/entity/ProjectsPage'

export interface GetAll {
	readonly projectRepository: ProjectRepository

	execute(): Promise<ProjectsPage>
}

@injectable()
export class GetAllImpl implements GetAll {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute() {
		return await this.projectRepository.getAll()
	}
}
