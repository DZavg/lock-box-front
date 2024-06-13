import type { RouteLocationNormalized } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { RouteName } from '@/router/RouteName'

export default function (to: RouteLocationNormalized) {
	const userStore = useUserStore()
	const { getIsAuthorized } = storeToRefs(userStore)
	const { requiresAuth } = to.meta

	if (requiresAuth && !getIsAuthorized.value) {
		return { name: RouteName.Auth }
	}
}
