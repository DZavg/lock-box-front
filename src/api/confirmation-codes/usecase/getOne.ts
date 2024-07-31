import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { ConfirmationCodesRepository } from '@/api/confirmation-codes/repository/ConfirmationCodesRepository'
import type { Message } from '@/global/types/api/message/Message'

export interface GetOne {
	readonly confirmationCodesRepository: ConfirmationCodesRepository

	execute(email: string): Promise<Message>
}

@injectable()
export class GetOneImpl implements GetOne {
	@inject(identifiers.confirmationCodesRepository)
	readonly confirmationCodesRepository!: ConfirmationCodesRepository

	async execute(email: string) {
		return await this.confirmationCodesRepository.getOne(email)
	}
}
