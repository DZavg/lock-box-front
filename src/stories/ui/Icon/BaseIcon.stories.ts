import type { Meta, StoryObj } from '@storybook/vue3'
import iconClose from '@/assets/images/svg/icon-close.svg'
import BaseIcon from '@/components/ui/Icon/BaseIcon.vue'
import { Color } from '@/model/types/Color/Color'
import { IconSize } from '@/model/types/Icon/IconSize'

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
			options: Color,
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseIcon>

export const White: Story = {
	args: {
		icon: iconClose,
		size: IconSize.M,
		color: Color.White,
	},
}

export const GrayThird: Story = {
	args: {
		icon: iconClose,
		size: IconSize.M,
		color: Color.GrayThird,
	},
}
