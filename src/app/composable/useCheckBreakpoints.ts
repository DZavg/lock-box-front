import { computed } from 'vue'
import { useBreakpointsStore } from '@/app/stores/breakpoints'

export default function () {
	const breakpointsStore = useBreakpointsStore()

	const isXSmallBreakpoint = computed(() => breakpointsStore.getIsXSmallBreakpoint)
	const isSmallBreakpoint = computed(() => breakpointsStore.getIsSmallBreakpoint)
	const isMediumBreakpoint = computed(() => breakpointsStore.getIsMediumBreakpoint)
	const isLargeBreakpoint = computed(() => breakpointsStore.getIsLargeBreakpoint)

	return {
		isXSmallBreakpoint,
		isSmallBreakpoint,
		isMediumBreakpoint,
		isLargeBreakpoint,
	}
}
