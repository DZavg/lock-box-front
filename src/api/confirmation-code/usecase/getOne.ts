import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { ConfirmationCodeRepository } from '@/api/confirmation-code/repository/ConfirmationCodeRepository'
import type { Message } from '@/global/types/api/message/Message'

export interface GetOne {
	readonly confirmationCodeRepository: ConfirmationCodeRepository

	execute(email: string): Promise<Message>
}

@injectable()
export class GetOneImpl implements GetOne {
	@inject(identifiers.confirmationCodeRepository)
	readonly confirmationCodeRepository!: ConfirmationCodeRepository

	async execute(email: string) {
		return await this.confirmationCodeRepository.getOne(email)
	}
}
