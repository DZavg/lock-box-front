import { type TabData } from '@/shared/types/Tabs/TabsData'
import LoginTabContent from '@/widgets/ui/Auth/LoginTabContent.vue'
import RegistrationTabContent from '@/widgets/ui/Auth/RegistrationTabContent.vue'
import { AuthTabsNames } from '@/widgets/types/Auth/AuthTabsNames'

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
