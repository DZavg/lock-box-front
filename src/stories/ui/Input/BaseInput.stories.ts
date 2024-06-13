import type { Meta, StoryObj } from '@storybook/vue3'
import BaseInput from '@/components/ui/Input/BaseInput.vue'

const meta: Meta<typeof BaseInput> = {
	component: BaseInput,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3697&mode=design&t=gx3S1080J5P0Gl8k-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseInput>

export const Default: Story = {
	args: {
		label: 'Поле ввода',
		placeholder: 'Поле ввода',
		name: 'email',
	},
}

export const Error: Story = {
	args: {
		label: 'Поле ввода',
		placeholder: 'Поле ввода',
		name: 'email',
		error: 'Ошибка',
	},
}

export const Disabled: Story = {
	args: {
		label: 'Поле ввода',
		placeholder: 'Поле ввода',
		name: 'email',
		disabled: true,
	},
}
