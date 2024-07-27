import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { AccessRepository } from '@/api/access/repository/AccessRepository'
import type { Password } from '@/global/types/api/password/Password'

export interface GetPasswordById {
	readonly accessRepository: AccessRepository

	execute(id: string): Promise<Password>
}

@injectable()
export class GetPasswordByIdImpl implements GetPasswordById {
	@inject(identifiers.accessRepository)
	readonly accessRepository!: AccessRepository

	async execute(id: string): Promise<Password> {
		return await this.accessRepository.getPasswordById(id)
	}
}
