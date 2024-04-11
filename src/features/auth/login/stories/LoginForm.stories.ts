import type { Meta, StoryObj } from '@storybook/vue3'
import LoginForm from '@/features/auth/login/ui/LoginForm.vue'

const meta: Meta<typeof LoginForm> = {
	component: LoginForm,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-2&mode=design&t=zJWQjiCQ8vXk6kyc-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Default: Story = {}
