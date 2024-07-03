import { type ProjectRepository } from '@/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { Message } from '@/global/types/api/message/Message'

export interface CreateAccess {
	readonly projectRepository: ProjectRepository

	execute(id: number | string): Promise<Message>
}

@injectable()
export class CreateAccessImpl implements CreateAccess {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(id: number | string): Promise<Message> {
		return await this.projectRepository.createAccess(id)
	}
}
