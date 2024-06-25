import { BaseHttpClient } from '@/api/client/repository/BaseRepository'
import type { User } from '@/api/user/entity/User'

export interface UserRepository {
	baseUrl: string
	getInfo(): Promise<User>
}

export class UserRepositoryImpl extends BaseHttpClient implements UserRepository {
	baseUrl = 'personal/'

	async getInfo(): Promise<User> {
		return await this.httpClient.get(`${this.baseUrl}data/`)
	}
}
