import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { identifiers } from '@/api/constants/identifiers'
import type { LoginDto } from '@/api/auth/dto/login.dto'
import type { Login } from '@/api/auth/usecase/login'
import type { SetTokens } from '@/api/tokens/usecase/setTokens'
import type { Tokens } from '@/api/tokens/entity/Tokens'
import type { RemoveTokens } from '@/api/tokens/usecase/removeTokens'
import type { GetTokens } from '@/api/tokens/usecase/getTokens'
import type { Logout } from '@/api/auth/usecase/logout'

const login = container.get<Login>(identifiers.login)
const logout = container.get<Logout>(identifiers.logout)
const setTokens = container.get<SetTokens>(identifiers.setTokens)
const getTokens = container.get<GetTokens>(identifiers.getTokens)
const removeTokens = container.get<RemoveTokens>(identifiers.removeTokens)

export const useAuthStore = defineStore('auth', {
	state: () => {
		return {
			isAuthorized: false,
		}
	},

	actions: {
		async login(data: LoginDto) {
			const response = await login.execute(data)
			const { access_token, refresh_token } = response
			this.singIn({ access_token, refresh_token })
			return response
		},

		async logout() {
			const response = await logout.execute()
			this.singOut()
			return response
		},

		singIn(tokens: Tokens = { access_token: '', refresh_token: '' }) {
			this.isAuthorized = true
			if (tokens.access_token && tokens.refresh_token) {
				setTokens.execute(tokens)
			}
		},

		getTokens(): Tokens {
			return getTokens.execute()
		},

		singOut() {
			this.isAuthorized = false
			removeTokens.execute()
		},
	},

	getters: {
		getIsAuthorized(): boolean {
			return this.isAuthorized
		},
	},
})
