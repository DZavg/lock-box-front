import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { AuthRepository } from '@/api/auth/repository/AuthRepository'
import type { Tokens } from '@/api/tokens/entity/Tokens'

export interface DemoAccess {
	readonly authRepository: AuthRepository
	execute(): Promise<Tokens>
}

@injectable()
export class DemoAccessImpl implements DemoAccess {
	@inject(identifiers.authRepository)
	readonly authRepository!: AuthRepository

	async execute() {
		return await this.authRepository.demoAccess()
	}
}
