import type { Meta, StoryObj } from '@storybook/vue3'
import RegistrationTabContent from '@/widgets/auth/tabs/ui/RegistrationTabContent.vue'

const meta: Meta<typeof RegistrationTabContent> = {
	component: RegistrationTabContent,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-3&mode=design&t=r8O0qaaFaTY2u1zT-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof RegistrationTabContent>

export const Default: Story = {}
