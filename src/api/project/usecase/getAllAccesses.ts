import { type ProjectRepository } from '@/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { ProjectsSlugPage } from '@/api/project/entity/ProjectsSlugPage'

export interface GetAllAccesses {
	readonly projectRepository: ProjectRepository

	execute(id: string | number): Promise<ProjectsSlugPage>
}

@injectable()
export class GetAllAccessesImpl implements GetAllAccesses {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(id: string | number): Promise<ProjectsSlugPage> {
		return await this.projectRepository.getAllAccesses(id)
	}
}
