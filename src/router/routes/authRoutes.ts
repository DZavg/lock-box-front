import CustomLayout from '@/layouts/CustomLayout.vue'
import { RouteName } from '@/router/RouteName'

export const authRoutes = {
	path: '',
	component: CustomLayout,
	children: [
		{
			path: '',
			redirect: () => ({ name: RouteName.Auth }),
		},
		{
			path: '/auth',
			name: RouteName.Auth,
			component: () => import('@/views/auth/ui/AuthPage.vue'),
			meta: { title: 'Авторизация' },
		},
		{
			path: '/recovery-password',
			name: RouteName.RecoveryPassword,
			component: () => import('@/views/password-recovery/ui/PasswordRecoveryPage.vue'),
			meta: { title: 'Восстановление пароля' },
		},
	],
}
