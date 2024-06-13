import { type TabData } from '@/shared/model/types/Tabs/TabsData'
import RegistrationForm from '@/components/Auth/RegistrationForm.vue'
import { AuthTabsName } from '@/widgets/auth/tabs/model/AuthTabsName'
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
