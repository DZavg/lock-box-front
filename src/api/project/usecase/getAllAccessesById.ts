import { type ProjectRepository } from '@/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { ProjectsSlugPage } from '@/api/project/entity/ProjectsSlugPage'

export interface GetAllAccessesById {
	readonly projectRepository: ProjectRepository

	execute(id: string): Promise<ProjectsSlugPage>
}

@injectable()
export class GetAllAccessesImpl implements GetAllAccessesById {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(id: string): Promise<ProjectsSlugPage> {
		return await this.projectRepository.getAllAccessesById(id)
	}
}
