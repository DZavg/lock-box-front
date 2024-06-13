import type { Meta, StoryObj } from '@storybook/vue3'
import BaseBreadcrumbNav from '@/components/ui/Breadcrumbs/BaseBreadcrumbNav.vue'
import getBreadcrumbs from '@/global/mock/breadcrumbs'

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
		breadcrumbs: getBreadcrumbs(),
	},
}
