import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'
import type { AccessRepository } from '@/api/access/repository/AccessRepository'
import type { AccessType } from '@/api/access/entity/AccessType'

export interface GetAllTypes {
	readonly accessRepository: AccessRepository

	execute(): Promise<AccessType[]>
}

@injectable()
export class GetAllTypesImpl implements GetAllTypes {
	@inject(identifiers.accessRepository)
	readonly accessRepository!: AccessRepository

	async execute(): Promise<AccessType[]> {
		return await this.accessRepository.getAllTypes()
	}
}
