import type { Meta, StoryObj } from '@storybook/vue3'
import RecoveryPasswordSuccessMessage from '@/widgets/recovery-password/ui/RecoveryPasswordSuccessMessage.vue'

const meta: Meta<typeof RecoveryPasswordSuccessMessage> = {
	component: RecoveryPasswordSuccessMessage,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=61-1212&mode=design&t=r8O0qaaFaTY2u1zT-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof RecoveryPasswordSuccessMessage>

export const Default: Story = {}
