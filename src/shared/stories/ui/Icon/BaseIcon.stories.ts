import type { Meta, StoryObj } from '@storybook/vue3'
import iconClose from '@/shared/images/svg/icon-close.svg'
import BaseIcon from '@/shared/types/Icon/BaseIcon.vue'

const meta: Meta<typeof BaseIcon> = {
	component: BaseIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseIcon>

export const Default: Story = {
	args: {
		icon: iconClose,
		size: 24,
	},
}
