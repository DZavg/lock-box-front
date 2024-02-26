import type { Meta, StoryObj } from '@storybook/vue3'
import { ButtonBackground } from '@/shared/types/Button/ButtonBackground'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
	component: BaseButton,
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
	},
}

export default meta
type Story = StoryObj<typeof BaseButton>

export const Fill: Story = {
	args: {
		disabled: false,
		type: 'button',
		background: ButtonBackground.Fill,
	},
	render: (args: any) => ({
		components: { BaseButton },
		setup() {
			return { args }
		},
		template: `
			<BaseButton v-bind="args">Скопировать пароль</BaseButton>
		`,
	}),
}

export const Border: Story = {
	args: {
		disabled: false,
		type: 'button',
		background: ButtonBackground.Border,
	},
	render: (args: any) => ({
		components: { BaseButton },
		setup() {
			return { args }
		},
		template: `
			<BaseButton v-bind="args">Скопировать пароль</BaseButton>
		`,
	}),
}

export const Disabled: Story = {
	args: {
		disabled: true,
		type: 'button',
	},
	render: (args: any) => ({
		components: { BaseButton },
		setup() {
			return { args }
		},
		template: `
			<BaseButton v-bind="args">Скопировать пароль</BaseButton>
		`,
	}),
}
