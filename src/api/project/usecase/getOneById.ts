import { type ProjectRepository } from '@/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { Project } from '@/api/project/entity/Project'

export interface GetOneById {
	readonly projectRepository: ProjectRepository

	execute(id: string): Promise<Project>
}

@injectable()
export class GetOneByIdImpl implements GetOneById {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(id: string): Promise<Project> {
		return await this.projectRepository.getOneById(id)
	}
}
