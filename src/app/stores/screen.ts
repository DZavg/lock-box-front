import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screen', {
	state: () => {
		return {
			isMobile: false,
			isTablet: false,
			isDesktop: false,
		}
	},
	actions: {
		setIsMobile(value: boolean) {
			this.isMobile = value
		},
		setIsTablet(value: boolean) {
			this.isTablet = value
		},
		setIsDesktop(value: boolean) {
			this.isDesktop = value
		},
	},
	getters: {
		getIsMobile: (state) => {
			return state.isMobile
		},
		getIsTablet: (state) => {
			return state.isTablet
		},
		getIsDesktop: (state) => {
			return state.isDesktop
		},
	},
})
