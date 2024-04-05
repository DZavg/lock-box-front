import type { Meta, StoryObj } from '@storybook/vue3'
import iconClose from '@/shared/images/svg/icon-close.svg'
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import { IconColor } from '@/shared/model/types/Icon/IconColor'

const meta: Meta<typeof BaseIcon> = {
	component: BaseIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
	argTypes: {
		color: {
			control: 'radio',
			options: IconColor,
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseIcon>

export const White: Story = {
	args: {
		icon: iconClose,
		size: 24,
		color: IconColor.White,
	},
}

export const GrayThird: Story = {
	args: {
		icon: iconClose,
		size: 24,
		color: IconColor.GrayThird,
	},
}
