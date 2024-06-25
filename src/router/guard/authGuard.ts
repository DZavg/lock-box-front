import type { RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { RouteName } from '@/router/RouteName'

export default function (to: RouteLocationNormalized) {
	const authStore = useAuthStore()
	const { getIsAuthorized } = storeToRefs(authStore)
	const { requiresAuth, requiresNotAuth } = to.meta

	if (requiresAuth && !getIsAuthorized.value) {
		return { name: RouteName.Auth }
	}

	if (requiresNotAuth && getIsAuthorized.value) {
		return { name: RouteName.Projects }
	}
}
