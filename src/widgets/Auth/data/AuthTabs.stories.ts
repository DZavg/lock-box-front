import type { Meta, StoryObj } from '@storybook/vue3'
import AuthTabs from '@/widgets/Auth/ui/AuthTabs.vue'

const meta: Meta<typeof AuthTabs> = {
	component: AuthTabs,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-2&mode=design&t=zJWQjiCQ8vXk6kyc-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof AuthTabs>

export const Default: Story = {}
