import type { Meta, StoryObj } from '@storybook/vue3'
import BaseLink from '@/components/ui/Link/BaseLink.vue'
import { Color } from '@/global/types/ui/color/Color'

const meta: Meta<typeof BaseLink> = {
	component: BaseLink,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=47-2488&mode=design&t=yWT03SRs5re1Us5z-0',
		},
		slots: {
			default: {
				template: `Восстановить пароль`,
			},
		},
	},
	args: {
		link: '/',
		target: '_self',
	},
	argTypes: {
		color: {
			control: 'radio',
			options: Color,
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseLink>

export const BluePrimary: Story = {
	args: {
		color: Color.BluePrimary,
	},
}

export const White: Story = {
	args: {
		color: Color.White,
	},
}
