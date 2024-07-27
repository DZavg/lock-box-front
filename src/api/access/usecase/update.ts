import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { AccessRepository } from '@/api/access/repository/AccessRepository'
import type { UpdateAccessDto } from '@/api/access/dto/update-access.dto'
import type { Message } from '@/global/types/api/message/Message'

export interface Update {
	readonly accessRepository: AccessRepository

	execute(id: string, access: UpdateAccessDto): Promise<Message>
}

@injectable()
export class UpdateImpl implements Update {
	@inject(identifiers.accessRepository)
	readonly accessRepository!: AccessRepository

	async execute(id: string, access: UpdateAccessDto): Promise<Message> {
		return await this.accessRepository.update(id, access)
	}
}
