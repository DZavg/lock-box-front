import { type TabData } from '@/shared/model/types/Tabs/TabsData'
import LoginTabContent from '@/widgets/Auth/ui/LoginTabContent.vue'
import RegistrationTabContent from '@/widgets/Auth/ui/RegistrationTabContent.vue'
import { AuthTabsNames } from '@/widgets/Auth/types/AuthTabsNames'

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
