import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { UpdateAccessDto } from '@/api/access/dto/update-access.dto'
import type { Message } from '@/global/types/api/message/Message'

export interface AccessRepository {
	baseUrl: string

	updateOneById(id: string, access: UpdateAccessDto): Promise<Message>
}

export class AccessRepositoryImpl extends BaseHttpClient implements AccessRepository {
	baseUrl = 'accesses/'

	async updateOneById(id: string, access: UpdateAccessDto): Promise<Message> {
		return await this.httpClient.patch(`${this.baseUrl}${id}`, access)
	}
}
