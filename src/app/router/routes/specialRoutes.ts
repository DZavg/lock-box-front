import AuthLayout from '@/app/layouts/AuthLayout.vue'
import { RouteName } from '@/app/router/RouteName'
import NotFoundPage from '@/pages/not-found/ui/NotFoundPage.vue'

export const specialRoutes = {
	path: '',
	component: AuthLayout,
	children: [
		{
			path: '/:pathMatch(.*)*',
			name: RouteName.NotFound,
			component: NotFoundPage,
		},
	],
}
