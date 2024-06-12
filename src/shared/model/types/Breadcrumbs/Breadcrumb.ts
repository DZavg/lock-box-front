import type { RouteLocationRaw } from 'vue-router'

export interface Breadcrumb {
	title: string
	link: string | RouteLocationRaw
}
