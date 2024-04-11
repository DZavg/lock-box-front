import type { Meta, StoryObj } from '@storybook/vue3'
import RegistrationForm from '@/features/auth/registration/ui/RegistrationForm.vue'

const meta: Meta<typeof RegistrationForm> = {
	component: RegistrationForm,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-3&mode=design&t=r8O0qaaFaTY2u1zT-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof RegistrationForm>

export const Default: Story = {}
