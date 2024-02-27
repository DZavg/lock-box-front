import type { Meta, StoryObj } from '@storybook/vue3'
import CloseButtonIcon from '@/shared/ui/Button/CloseButtonIcon.vue'

const meta: Meta<typeof CloseButtonIcon> = {
	component: CloseButtonIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof CloseButtonIcon>

export const Default: Story = {}
