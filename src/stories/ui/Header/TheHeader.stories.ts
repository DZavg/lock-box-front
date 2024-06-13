import type { Meta, StoryObj } from '@storybook/vue3'
import TheHeader from '@/components/ui/Header/TheHeader.vue'

const meta: Meta<typeof TheHeader> = {
	component: TheHeader,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=uNBcrqXUOxgX9HSn-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof TheHeader>

export const Default: Story = {}
