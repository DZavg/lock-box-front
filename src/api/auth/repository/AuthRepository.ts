import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { LoginDto } from '@/api/auth/dto/login.dto'
import type { Tokens } from '@/api/tokens/entity/Tokens'
import type { Message } from '@/global/types/api/message/Message'
import type { RegistrationDto } from '@/api/auth/dto/registration.dto'
import type { RecoveryPasswordDto } from '@/api/auth/dto/recovery-password.dto'

export interface AuthRepository {
	baseUrl: string
	login(data: LoginDto): Promise<Tokens>
	logout(): Promise<Message>
	registration(data: RegistrationDto): Promise<Message>
	recoveryPassword(data: RecoveryPasswordDto): Promise<Message>
}

export class AuthRepositoryImpl extends BaseHttpClient implements AuthRepository {
	baseUrl = 'auth/'

	async login(data: LoginDto): Promise<Tokens> {
		return await this.httpClient.post(`${this.baseUrl}login/`, data)
	}

	async logout(): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}logout/`)
	}

	async registration(data: RegistrationDto): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}registration/`, data)
	}

	async recoveryPassword(data: RecoveryPasswordDto): Promise<Message> {
		return await this.httpClient.post(`${this.baseUrl}recovery-password/`, data)
	}
}
