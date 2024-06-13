import { useScreenStore } from '@/stores/screen'
import throttle from '@/shared/lib/throttle'

const checkScreen = {
	install: () => {
		const store = useScreenStore()

		const checkScreen = () => {
			const screenWidth = window.innerWidth

			store.setIsDesktop(screenWidth > 991)
			store.setIsTablet(screenWidth > 768 && screenWidth <= 991)
			store.setIsMobile(screenWidth <= 768)
		}

		const checkScreenWithThrottle = throttle(checkScreen)

		window.addEventListener('resize', checkScreenWithThrottle)
		checkScreen()
	},
}
export default checkScreen
