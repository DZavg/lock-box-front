import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/app/layouts/AuthLayout.vue'
import PasswordRecoveryPage from '@/pages/PasswordRecoveryPage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: AuthLayout,
			children: [
				{
					path: '/recovery-password',
					name: 'recovery-password',
					component: PasswordRecoveryPage,
				},
			],
		},
	],
})

export default router
