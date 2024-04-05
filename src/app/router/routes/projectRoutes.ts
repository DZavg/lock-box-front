import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import { RouteName } from '@/app/router/RouteName'
import ProjectsPage from '@/pages/projects/ui/ProjectsPage.vue'

export const projectRoutes = {
	path: '/projects',
	component: DefaultLayout,
	children: [
		{
			path: '',
			name: RouteName.Projects,
			component: ProjectsPage,
		},
	],
}
