import type { Meta, StoryObj } from '@storybook/vue3'
import EyeButton from '@/shared/ui/Button/EyeButton.vue'

const meta: Meta<typeof EyeButton> = {
	component: EyeButton,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-3&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof EyeButton>

export const Default: Story = {}
