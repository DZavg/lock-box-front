import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { identifiers } from '@/api/constants/identifiers'
import type { User } from '@/api/user/entity/User'
import type { GetInfo } from '@/api/user/usecase/getInfo'

const getInfo = container.get<GetInfo>(identifiers.getUserInfo)

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			user: {} as User,
		}
	},

	actions: {
		async getInfo() {
			const response = await getInfo.execute()
			this.user = response
			return response
		},
	},

	getters: {
		getUser(): User {
			return this.user
		},
	},
})
