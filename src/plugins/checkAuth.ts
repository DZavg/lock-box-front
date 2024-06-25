import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'

export default async () => {
	const userStore = useUserStore()
	const authStore = useAuthStore()

	const { getInfo } = userStore
	const { singIn, singOut, getTokens } = authStore

	if (getTokens().refresh_token) {
		try {
			await getInfo()
			singIn()
		} catch (e) {
			singOut()
		}
	} else {
		singOut()
	}
}
