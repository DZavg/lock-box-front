import { type TabData } from '@/global/types/ui/tabs/TabsData'
import RegistrationForm from '@/components/Auth/RegistrationForm.vue'
import { AuthTabsName } from '@/global/types/ui/auth/AuthTabsName'
import LoginForm from '@/components/Auth/LoginForm.vue'

export const AuthTabsData: TabData[] = [
	{
		name: AuthTabsName.Login,
		buttonText: 'Логин',
		component: LoginForm,
	},
	{
		name: AuthTabsName.Registration,
		buttonText: 'Регистрация',
		component: RegistrationForm,
	},
	{
		name: AuthTabsName.DemoAccess,
		buttonText: 'Демо-доступ',
		component: LoginForm,
	},
]
