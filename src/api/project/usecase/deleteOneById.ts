import { type ProjectRepository } from '@/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { Message } from '@/global/types/api/message/Message'

export interface DeleteOneById {
	readonly projectRepository: ProjectRepository

	execute(id: string): Promise<Message>
}

@injectable()
export class DeleteOneByIdImpl implements DeleteOneById {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(id: string): Promise<Message> {
		return await this.projectRepository.deleteOneById(id)
	}
}
