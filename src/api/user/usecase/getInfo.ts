import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { UserRepository } from '@/api/user/repository/UserRepository'
import type { User } from '@/api/user/entity/User'

export interface GetInfo {
	readonly userRepository: UserRepository
	execute(): Promise<User>
}

@injectable()
export class GetInfoImpl implements GetInfo {
	@inject(identifiers.userRepository)
	readonly userRepository!: UserRepository

	async execute() {
		return await this.userRepository.getInfo()
	}
}
