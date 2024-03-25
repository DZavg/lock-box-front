import type { Meta, StoryObj } from '@storybook/vue3'
import EmailInput from '@/shared/ui/Input/EmailInput.vue'

const meta: Meta<typeof EmailInput> = {
	component: EmailInput,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-2&mode=design&t=6ngpJBBHFj4nsuMb-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof EmailInput>

export const Default: Story = {}
