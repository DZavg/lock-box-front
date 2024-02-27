import { defineStore } from 'pinia'

export const useBreakpointsStore = defineStore('breakpoints', {
	state: () => {
		return {
			isXSmallBreakpoint: false,
			isSmallBreakpoint: false,
			isMediumBreakpoint: false,
			isLargeBreakpoint: false,
		}
	},
	actions: {
		setIsXSmallBreakpoint(value: boolean) {
			this.isXSmallBreakpoint = value
		},
		setIsSmallBreakpoint(value: boolean) {
			this.isSmallBreakpoint = value
		},
		setIsMediumBreakpoint(value: boolean) {
			this.isMediumBreakpoint = value
		},
		setIsLargeBreakpoint(value: boolean) {
			this.isLargeBreakpoint = value
		},
	},
	getters: {
		getIsXSmallBreakpoint: (state) => {
			return state.isXSmallBreakpoint
		},
		getIsSmallBreakpoint: (state) => {
			return state.isSmallBreakpoint
		},
		getIsMediumBreakpoint: (state) => {
			return state.isMediumBreakpoint
		},
		getIsLargeBreakpoint: (state) => {
			return state.isLargeBreakpoint
		},
	},
})
