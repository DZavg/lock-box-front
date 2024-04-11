import { type TabData } from '@/shared/model/types/Tabs/TabsData'
import RegistrationTabContent from '@/widgets/auth/tabs/ui/RegistrationTabContent.vue'
import { AuthTabsName } from '@/widgets/auth/tabs/model/AuthTabsName'
import LoginForm from '@/features/auth/login/ui/LoginForm.vue'

export const AuthTabsData: TabData[] = [
	{
		name: AuthTabsName.Login,
		buttonText: 'Логин',
		component: LoginForm,
	},
	{
		name: AuthTabsName.Registration,
		buttonText: 'Регистрация',
		component: RegistrationTabContent,
	},
	{
		name: AuthTabsName.DemoAccess,
		buttonText: 'Демо-доступ',
		component: LoginForm,
	},
]
