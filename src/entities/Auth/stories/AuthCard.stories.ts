import type { Meta, StoryObj } from '@storybook/vue3'
import AuthCard from '@/entities/Auth/ui/AuthCard.vue'

const meta: Meta<typeof AuthCard> = {
	component: AuthCard,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-2&mode=design&t=6ngpJBBHFj4nsuMb-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof AuthCard>

export const Default: Story = {
	args: {
		title: 'Добро пожаловать',
	},
}
