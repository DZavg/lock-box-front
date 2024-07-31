import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { Message } from '@/global/types/api/message/Message'

export interface ConfirmationCodesRepository {
	baseUrl: string

	getOne(email: string): Promise<Message>
}

export class ConfirmationCodesRepositoryImpl
	extends BaseHttpClient
	implements ConfirmationCodesRepository
{
	baseUrl = 'confirmation-codes/'

	async getOne(email: string): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}`, { email })
	}
}
