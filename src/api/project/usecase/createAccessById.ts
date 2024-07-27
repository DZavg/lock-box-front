import { type ProjectRepository } from '@/api/project/repository/ProjectRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { Message } from '@/global/types/api/message/Message'
import type { AccessDto } from '@/api/access/dto/access.dto'

export interface CreateAccessById {
	readonly projectRepository: ProjectRepository

	execute(id: string, access: AccessDto): Promise<Message>
}

@injectable()
export class CreateAccessImpl implements CreateAccessById {
	@inject(identifiers.projectRepository)
	readonly projectRepository!: ProjectRepository

	async execute(id: string, access: AccessDto): Promise<Message> {
		return await this.projectRepository.createAccessById(id, access)
	}
}
