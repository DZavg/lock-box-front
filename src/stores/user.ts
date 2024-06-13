import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			user: null,
			isAuthorized: true,
		}
	},

	actions: {},

	getters: {
		getIsAuthorized(): boolean {
			return this.isAuthorized
		},
	},
})
