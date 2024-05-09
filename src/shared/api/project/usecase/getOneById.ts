import { type ProjectsSlugPage } from '@/shared/model/types/Project/ProjectsSlugPage'
import { type ProjectRepository } from '@/shared/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/shared/api/constants/identifiers'

export interface GetOneById {
	readonly projectRepository: ProjectRepository

	execute(id: string | number): Promise<ProjectsSlugPage>
}

@injectable()
export class GetOneByIdImpl implements GetOneById {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(id: string | number): Promise<ProjectsSlugPage> {
		return await this.projectRepository.getOneById(id)
	}
}
