import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { LoginDto } from '@/api/auth/dto/login.dto'
import type { Tokens } from '@/api/tokens/entity/Tokens'
import type { Message } from '@/global/types/api/message/Message'

export interface AuthRepository {
	baseUrl: string
	login(data: LoginDto): Promise<Tokens>
	logout(): Promise<Message>
}

export class AuthRepositoryImpl extends BaseHttpClient implements AuthRepository {
	baseUrl = 'auth/'

	async login(data: LoginDto): Promise<Tokens> {
		return await this.httpClient.post(`${this.baseUrl}login/`, data)
	}

	async logout(): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}logout`)
	}
}
