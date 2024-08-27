import { useScreenStore } from '@/stores/screen'
import { storeToRefs } from 'pinia'

export default function () {
	const screenStore = useScreenStore()
	const { isMobile, isTablet, isDesktop } = storeToRefs(screenStore)

	return {
		isMobile,
		isTablet,
		isDesktop,
	}
}
