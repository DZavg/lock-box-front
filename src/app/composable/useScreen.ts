import { computed } from 'vue'
import { useScreenStore } from '@/app/stores/screen'

export default function () {
	const screenStore = useScreenStore()

	const isMobile = computed(() => screenStore.getIsMobile)
	const isTablet = computed(() => screenStore.getIsTablet)
	const isDesktop = computed(() => screenStore.getIsDesktop)

	return {
		isMobile,
		isTablet,
		isDesktop,
	}
}
