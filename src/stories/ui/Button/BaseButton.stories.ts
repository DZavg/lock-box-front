import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import { ButtonView } from '@/model/types/Button/ButtonView'

const meta: Meta<typeof BaseButton> = {
	component: BaseButton,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-4880&mode=design&t=xtqnNljh5dqIFBuN-0',
		},
		slots: {
			default: {
				template: `Скопировать пароль`,
			},
		},
	},
	argTypes: {
		type: {
			control: 'radio',
			options: ['submit', 'reset', 'button'],
		},
		view: {
			control: 'radio',
			options: ButtonView,
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseButton>

export const Filled: Story = {
	args: {
		disabled: false,
		type: 'button',
	},
}

export const Outlined: Story = {
	args: {
		disabled: false,
		view: ButtonView.Outlined,
		type: 'button',
	},
}

export const DisabledFilled: Story = {
	args: {
		disabled: true,
		type: 'button',
	},
}

export const DisabledOutlined: Story = {
	args: {
		disabled: true,
		view: ButtonView.Outlined,
		type: 'button',
	},
}
