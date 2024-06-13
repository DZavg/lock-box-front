import type { RouteLocationNormalized } from 'vue-router'
import useSeo from '@/composables/useSeo'

export default function (to: RouteLocationNormalized) {
	const { title } = to.meta

	title && useSeo({ title: title as string })
}
