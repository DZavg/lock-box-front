import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { AuthRepository } from '@/api/auth/repository/AuthRepository'
import type { LoginDto } from '@/api/auth/dto/login.dto'
import type { Tokens } from '@/api/tokens/entity/Tokens'

export interface Login {
	readonly authRepository: AuthRepository
	execute(data: LoginDto): Promise<Tokens>
}

@injectable()
export class LoginImpl implements Login {
	@inject(identifiers.authRepository)
	readonly authRepository!: AuthRepository

	async execute(data: LoginDto) {
		return await this.authRepository.login(data)
	}
}
