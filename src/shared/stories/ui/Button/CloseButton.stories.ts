import type { Meta, StoryObj } from '@storybook/vue3'
import CloseButton from '@/shared/ui/Button/CloseButton.vue'

const meta: Meta<typeof CloseButton> = {
	component: CloseButton,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof CloseButton>

export const Default: Story = {}
