import type { Meta, StoryObj } from '@storybook/vue3'
import BaseLinkButton from '@/shared/ui/Link/BaseLinkButton.vue'
import { ButtonView } from '@/shared/model/types/Button/ButtonView'

const meta: Meta<typeof BaseLinkButton> = {
	component: BaseLinkButton,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=47-2488&mode=design&t=yWT03SRs5re1Us5z-0',
		},
		slots: {
			default: {
				template: `Скопировать пароль`,
			},
		},
	},
	args: {
		link: '/',
		target: '_self',
	},
	argTypes: {
		view: {
			control: 'radio',
			options: ButtonView,
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseLinkButton>

export const Filled: Story = {
	args: {
		view: ButtonView.Filled,
	},
}

export const Outlined: Story = {
	args: {
		view: ButtonView.Outlined,
	},
}
