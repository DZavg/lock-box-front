import { type InternalAxiosRequestConfig } from 'axios'
import { container } from '@/api/DIContainer'
import type { GetTokens } from '@/api/tokens/usecase/getTokens'
import { identifiers } from '@/api/constants/identifiers'

export default function (config: InternalAxiosRequestConfig) {
	const getTokens = container.get<GetTokens>(identifiers.getTokens)
	const tokens = getTokens.execute()
	config.headers.Authorization = 'Bearer ' + tokens.access_token
}
