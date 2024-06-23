import Cookies from 'js-cookie'
import type { Tokens } from '@/api/tokens/entity/Tokens'

export interface TokensRepository {
	getTokens(): Tokens
	setTokens(tokens: Tokens): void
	removeTokens(): void
}

export class TokensRepositoryImpl implements TokensRepository {
	getTokens(): Tokens {
		return {
			access_token: Cookies.get('token') || '',
			refresh_token: localStorage.getItem('token') || '',
		}
	}

	setTokens(tokens: Tokens): void {
		Cookies.set('token', tokens.access_token)
		localStorage.setItem('token', tokens.refresh_token)
	}

	removeTokens() {
		localStorage.removeItem('token')
		Cookies.remove('token')
	}
}
