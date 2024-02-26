import type { Meta, StoryObj } from '@storybook/vue3'
import { ButtonBackground } from '@/shared/types/Button/ButtonBackground'
import BaseButtonWithLoading from '@/shared/ui/Button/BaseButtonWithLoading.vue'

const meta: Meta<typeof BaseButtonWithLoading> = {
	component: BaseButtonWithLoading,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-4880&mode=design&t=xtqnNljh5dqIFBuN-0',
		},
	},
	argTypes: {
		type: {
			control: 'radio',
			options: ['submit', 'reset', 'button'],
		},
		background: {
			control: 'radio',
			options: ButtonBackground,
		},
		loading: {
			control: 'boolean',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseButtonWithLoading>

export const Fill: Story = {
	args: {
		disabled: false,
		type: 'button',
		background: ButtonBackground.Fill,
		loading: true,
	},
	render: (args: any) => ({
		components: { BaseButtonWithLoading },
		setup() {
			return { args }
		},
		template: `
			<BaseButtonWithLoading v-bind="args">Скопировать пароль</BaseButtonWithLoading>
		`,
	}),
}
