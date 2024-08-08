import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { Message } from '@/global/types/api/message/Message'

export interface ConfirmationCodeRepository {
	baseUrl: string

	getOne(email: string): Promise<Message>
}

export class ConfirmationCodeRepositoryImpl
	extends BaseHttpClient
	implements ConfirmationCodeRepository
{
	baseUrl = 'confirmation-codes/'

	async getOne(email: string): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}`, { email })
	}
}
