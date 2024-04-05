import { type TabData } from '@/shared/model/types/Tabs/TabsData'
import LoginTabContent from '@/widgets/auth/ui/LoginTabContent.vue'
import RegistrationTabContent from '@/widgets/auth/ui/RegistrationTabContent.vue'
import { AuthTabsNames } from '@/widgets/auth/model/AuthTabsNames'

export const AuthTabsData: TabData[] = [
	{
		name: AuthTabsNames.Login,
		buttonText: 'Логин',
		component: LoginTabContent,
	},
	{
		name: AuthTabsNames.Registration,
		buttonText: 'Регистрация',
		component: RegistrationTabContent,
	},
	{
		name: AuthTabsNames.DemoAccess,
		buttonText: 'Демо-доступ',
		component: LoginTabContent,
	},
]
