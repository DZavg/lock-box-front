import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { LoginDto } from '@/api/auth/dto/login.dto'
import type { Tokens } from '@/api/tokens/entity/Tokens'

export interface AuthRepository {
	baseUrl: string
	login(data: LoginDto): Promise<Tokens>
}

export class AuthRepositoryImpl extends BaseHttpClient implements AuthRepository {
	baseUrl = 'auth/'

	async login(data: LoginDto): Promise<Tokens> {
		return await this.httpClient.post(`${this.baseUrl}login/`, data)
	}
}
