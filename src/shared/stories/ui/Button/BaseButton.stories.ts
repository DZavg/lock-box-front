import type { Meta, StoryObj } from '@storybook/vue3'
import { BaseButton } from '@/shared/ui/Button/index'

const meta: Meta<typeof BaseButton> = {
	component: BaseButton,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
		},
	},
	argTypes: {
		type: {
			control: 'radio',
			options: ['submit', 'reset', 'button'],
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseButton>

export const Default: Story = {
	args: {
		disabled: false,
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
