import type { Meta, StoryObj } from '@storybook/vue3'
import UserDropdown from '@/features/ui/User/UserDropdown.vue'

const meta: Meta<typeof UserDropdown> = {
	component: UserDropdown,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=QAjpnzANir09AxI3-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof UserDropdown>

export const Default: Story = {
	args: {
		name: 'test name',
	},
}
