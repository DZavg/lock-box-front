import CustomLayout from '@/layouts/CustomLayout.vue'
import { RouteName } from '@/app/router/RouteName'

export const specialRoutes = {
	path: '',
	component: CustomLayout,
	children: [
		{
			path: '/:pathMatch(.*)*',
			name: RouteName.NotFound,
			component: () => import('@/pages/not-found/ui/NotFoundPage.vue'),
			meta: { title: 'Страница не найдена' },
		},
	],
}
