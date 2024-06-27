import { type ProjectRepository } from '@/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { ProjectDto } from '@/api/project/dto/project.dto'
import type { Project } from '@/api/project/entity/Project'

export interface Create {
	readonly projectRepository: ProjectRepository

	execute(project: ProjectDto): Promise<Project>
}

@injectable()
export class CreateImpl implements Create {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(project: ProjectDto): Promise<Project> {
		return await this.projectRepository.create(project)
	}
}
