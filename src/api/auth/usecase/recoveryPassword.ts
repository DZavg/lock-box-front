import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { AuthRepository } from '@/api/auth/repository/AuthRepository'
import type { Message } from '@/global/types/api/message/Message'
import type { RecoveryPasswordDto } from '@/api/auth/dto/recovery-password.dto'

export interface RecoveryPassword {
	readonly authRepository: AuthRepository
	execute(data: RecoveryPasswordDto): Promise<Message>
}

@injectable()
export class RecoveryPasswordImpl implements RecoveryPassword {
	@inject(identifiers.authRepository)
	readonly authRepository!: AuthRepository

	async execute(data: RecoveryPasswordDto) {
		return await this.authRepository.recoveryPassword(data)
	}
}
