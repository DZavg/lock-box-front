import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
	state: () => {
		return {
			isActive: false as boolean,
		}
	},
	actions: {
		showLoader() {
			this.isActive = true
		},

		hideLoader() {
			this.isActive = false
		},
	},
	getters: {
		getIsActive: (state) => {
			return state.isActive
		},
	},
})
