import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { UpdateAccessDto } from '@/api/access/dto/update-access.dto'
import type { Message } from '@/global/types/api/message/Message'
import type { Password } from '@/global/types/api/password/Password'
import type { AccessType } from '@/api/access/entity/AccessType'

export interface AccessRepository {
	baseUrl: string

	updateOneById(id: string, access: UpdateAccessDto): Promise<Message>
	deleteOneById(id: string): Promise<Message>
	getPasswordById(id: string): Promise<Password>
	getAllTypes(): Promise<AccessType[]>
}

export class AccessRepositoryImpl extends BaseHttpClient implements AccessRepository {
	baseUrl = 'accesses/'

	async updateOneById(id: string, access: UpdateAccessDto): Promise<Message> {
		return await this.httpClient.patch(`${this.baseUrl}${id}`, access)
	}

	async deleteOneById(id: string): Promise<Message> {
		return await this.httpClient.delete(`${this.baseUrl}${id}`)
	}

	async getPasswordById(id: string): Promise<Password> {
		return await this.httpClient.get(`${this.baseUrl}${id}/password`)
	}

	async getAllTypes(): Promise<AccessType[]> {
		return await this.httpClient.get(`${this.baseUrl}types`)
	}
}
