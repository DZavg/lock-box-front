import { useBreakpointsStore } from '@/app/stores/breakpoints'

const checkBreakpointsPlugin = {
	install: () => {
		const observer = new ResizeObserver(() => {
			const store = useBreakpointsStore()
			const screenWidth = window.innerWidth

			store.setIsLargeBreakpoint(screenWidth > 991)
			store.setIsMediumBreakpoint(screenWidth > 768 && screenWidth <= 991)
			store.setIsSmallBreakpoint(screenWidth > 475 && screenWidth <= 768)
			store.setIsXSmallBreakpoint(screenWidth <= 475)
		})
		observer.observe(document.body)
	},
}
export default checkBreakpointsPlugin
