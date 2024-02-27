import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonClose from '@/shared/ui/Button/ButtonClose.vue'

const meta: Meta<typeof ButtonClose> = {
	component: ButtonClose,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ButtonClose>

export const Default: Story = {}
