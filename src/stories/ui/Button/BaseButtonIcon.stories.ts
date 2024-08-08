import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButtonIcon from '@/components/ui/Button/BaseButtonIcon.vue'
import iconClose from '/images/svg/icon-close.svg'
import { IconSize } from '@/global/types/ui/icon/IconSize'

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
		size: IconSize.M,
	},
}
