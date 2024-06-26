import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { AuthRepository } from '@/api/auth/repository/AuthRepository'
import type { RegistrationDto } from '@/api/auth/dto/registration.dto'
import type { Message } from '@/global/types/api/message/Message'

export interface Registration {
	readonly authRepository: AuthRepository
	execute(data: RegistrationDto): Promise<Message>
}

@injectable()
export class RegistrationImpl implements Registration {
	@inject(identifiers.authRepository)
	readonly authRepository!: AuthRepository

	async execute(data: RegistrationDto) {
		return await this.authRepository.registration(data)
	}
}
