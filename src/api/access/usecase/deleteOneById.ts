import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { AccessRepository } from '@/api/access/repository/AccessRepository'
import type { Message } from '@/global/types/api/message/Message'

export interface DeleteOneById {
	readonly accessRepository: AccessRepository

	execute(id: string): Promise<Message>
}

@injectable()
export class DeleteOneByIdImpl implements DeleteOneById {
	@inject(identifiers.accessRepository)
	readonly accessRepository!: AccessRepository

	async execute(id: string): Promise<Message> {
		return await this.accessRepository.deleteOneById(id)
	}
}
