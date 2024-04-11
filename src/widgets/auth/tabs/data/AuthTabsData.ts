import { type TabData } from '@/shared/model/types/Tabs/TabsData'
import LoginTabContent from '@/widgets/auth/tabs/ui/LoginTabContent.vue'
import RegistrationTabContent from '@/widgets/auth/tabs/ui/RegistrationTabContent.vue'
import { AuthTabsName } from '@/widgets/auth/tabs/model/AuthTabsName'

export const AuthTabsData: TabData[] = [
	{
		name: AuthTabsName.Login,
		buttonText: 'Логин',
		component: LoginTabContent,
	},
	{
		name: AuthTabsName.Registration,
		buttonText: 'Регистрация',
		component: RegistrationTabContent,
	},
	{
		name: AuthTabsName.DemoAccess,
		buttonText: 'Демо-доступ',
		component: LoginTabContent,
	},
]
