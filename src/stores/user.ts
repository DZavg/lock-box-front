import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { identifiers } from '@/api/constants/identifiers'
import type { LoginDto } from '@/api/auth/dto/login.dto'
import type { Login } from '@/api/auth/usecase/login'

const login = container.get<Login>(identifiers.login)

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			user: null,
			isAuthorized: true,
		}
	},

	actions: {
		async login(data: LoginDto) {
			return await login.execute(data)
		},
	},

	getters: {
		getIsAuthorized(): boolean {
			return this.isAuthorized
		},
	},
})
