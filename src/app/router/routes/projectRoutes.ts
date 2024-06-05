import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import { RouteName } from '@/app/router/RouteName'
import ProjectsPage from '@/pages/project/ui/ProjectsPage.vue'
import ProjectsSlugPage from '@/pages/project/ui/ProjectsSlugPage.vue'

export const projectRoutes = {
	path: '/projects',
	component: DefaultLayout,
	children: [
		{
			path: '',
			name: RouteName.Projects,
			component: ProjectsPage,
			meta: { title: 'Проекты' },
		},
		{
			path: ':slug',
			name: RouteName.ProjectsSlug,
			component: ProjectsSlugPage,
			// meta: { title: 'Da' },
		},
	],
	meta: {
		requiresAuth: true,
	},
}
