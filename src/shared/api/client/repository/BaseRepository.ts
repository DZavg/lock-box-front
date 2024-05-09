import { type AxiosInstance } from 'axios'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/shared/api/constants/identifiers'

interface BaseRepository {
	readonly httpClient: AxiosInstance
}

@injectable()
export class BaseHttpClient implements BaseRepository {
	@inject(identifiers.httpClient) readonly httpClient!: AxiosInstance
}
