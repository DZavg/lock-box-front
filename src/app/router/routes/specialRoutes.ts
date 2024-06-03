import CustomLayout from '@/app/layouts/CustomLayout.vue'
import { RouteName } from '@/app/router/RouteName'
import NotFoundPage from '@/pages/not-found/ui/NotFoundPage.vue'

export const specialRoutes = {
	path: '',
	component: CustomLayout,
	children: [
		{
			path: '/:pathMatch(.*)*',
			name: RouteName.NotFound,
			component: NotFoundPage,
			meta: { title: 'Страница не найдена' },
		},
	],
}
