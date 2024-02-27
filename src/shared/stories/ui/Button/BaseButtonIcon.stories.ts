import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import iconClose from '@/shared/images/svg/icon-close.svg'

const meta: Meta<typeof BaseButtonIcon> = {
	component: BaseButtonIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseButtonIcon>

export const Default: Story = {
	args: {
		icon: iconClose,
		size: 24,
	},
}
