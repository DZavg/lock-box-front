import type { Meta, StoryObj } from '@storybook/vue3'
import BaseBreadcrumbNav from '@/shared/ui/Breadcrumbs/BaseBreadcrumbNav.vue'

const meta: Meta<typeof BaseBreadcrumbNav> = {
	component: BaseBreadcrumbNav,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=bLsFZyxvDIeXQk3J-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseBreadcrumbNav>

export const Default: Story = {
	args: {
		breadcrumbList: [
			{
				title: 'Главная',
				link: '/',
			},
			{
				title: 'Проекты',
				link: '/',
			},
			{
				title: 'Бренд одежды "IVOLGA"',
				link: '/',
			},
			{
				title: 'Доступы',
				link: '/',
			},
		],
	},
}
