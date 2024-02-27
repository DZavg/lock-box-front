import type { Meta, StoryObj } from '@storybook/vue3'
import CopyButton from '@/shared/ui/Button/CopyButton.vue'

const meta: Meta<typeof CopyButton> = {
	component: CopyButton,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const Default: Story = {}
