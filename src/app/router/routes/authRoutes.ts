import AuthLayout from '@/app/layouts/AuthLayout.vue'
import AuthPage from '@/pages/auth/ui/AuthPage.vue'
import PasswordRecoveryPage from '@/pages/password-recovery/ui/PasswordRecoveryPage.vue'
import { RouteName } from '@/app/router/RouteName'

export const authRoutes = {
	path: '',
	component: AuthLayout,
	children: [
		{
			path: '',
			redirect: () => ({ name: RouteName.Auth }),
		},
		{
			path: '/auth',
			name: RouteName.Auth,
			component: AuthPage,
		},
		{
			path: '/recovery-password',
			name: RouteName.RecoveryPassword,
			component: PasswordRecoveryPage,
		},
	],
}
