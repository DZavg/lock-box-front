import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { AuthRepository } from '@/api/auth/repository/AuthRepository'
import type { Message } from '@/global/types/api/message/Message'

export interface Logout {
	readonly authRepository: AuthRepository
	execute(): Promise<Message>
}

@injectable()
export class LogoutImpl implements Logout {
	@inject(identifiers.authRepository)
	readonly authRepository!: AuthRepository

	async execute() {
		return await this.authRepository.logout()
	}
}
