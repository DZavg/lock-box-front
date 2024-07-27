import { type ProjectRepository } from '@/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { UpdateProjectDto } from '@/api/project/dto/update-project.dto'
import type { Message } from '@/global/types/api/message/Message'

export interface Update {
	readonly projectRepository: ProjectRepository

	execute(id: string, project: UpdateProjectDto): Promise<Message>
}

@injectable()
export class UpdateImpl implements Update {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(id: string, project: UpdateProjectDto): Promise<Message> {
		return await this.projectRepository.update(id, project)
	}
}
