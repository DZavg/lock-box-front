import type { Meta, StoryObj } from '@storybook/vue3'
import PasswordInput from '@/components/ui/Input/PasswordInput.vue'

const meta: Meta<typeof PasswordInput> = {
	component: PasswordInput,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3697&mode=design&t=gx3S1080J5P0Gl8k-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof PasswordInput>

export const Default: Story = {
	args: {
		name: 'password',
	},
}
