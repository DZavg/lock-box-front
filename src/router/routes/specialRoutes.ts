import CustomLayout from '@/layouts/CustomLayout.vue'
import { RouteName } from '@/router/RouteName'

export const specialRoutes = {
	path: '',
	component: CustomLayout,
	children: [
		{
			path: '/:pathMatch(.*)*',
			name: RouteName.NotFound,
			component: () => import('@/views/not-found/NotFoundPage.vue'),
			meta: { title: 'Страница не найдена' },
		},
	],
}
