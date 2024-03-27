import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/app/layouts/AuthLayout.vue'
import PasswordRecoveryPage from '@/pages/PasswordRecoveryPage.vue'
import AuthPage from '@/pages/AuthPage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: AuthLayout,
			children: [
				{
					path: '/auth',
					name: 'Auth',
					component: AuthPage,
				},
				{
					path: '/recovery-password',
					name: 'RecoveryPassword',
					component: PasswordRecoveryPage,
				},
			],
		},
	],
})

export default router
