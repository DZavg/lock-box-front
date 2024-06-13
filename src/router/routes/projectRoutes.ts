import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { RouteName } from '@/router/RouteName'

export const projectRoutes = {
	path: '/projects',
	component: DefaultLayout,
	children: [
		{
			path: '',
			name: RouteName.Projects,
			component: () => import('@/pages/project/ui/ProjectsPage.vue'),
			meta: { title: 'Проекты' },
		},
		{
			path: ':slug',
			name: RouteName.ProjectsSlug,
			component: () => import('@/pages/project/ui/ProjectsSlugPage.vue'),
		},
	],
	meta: {
		requiresAuth: true,
	},
}
