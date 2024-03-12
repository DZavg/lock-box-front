import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import AuthLayout from '@/app/layouts/AuthLayout.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: AuthLayout,
			children: [
				{
					path: '/',
					name: 'home',
					component: HomeView,
				},
			],
		},
	],
})

export default router
