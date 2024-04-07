import type { Meta, StoryObj } from '@storybook/vue3'
import BaseRadio from '@/shared/ui/Radio/BaseRadio.vue'

const meta: Meta<typeof BaseRadio> = {
	component: BaseRadio,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=56-1420&mode=design&t=FEh9MJyGcJSh3vI4-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseRadio>

export const Default: Story = {
	args: {
		name: 'profile',
		value: 'profile',
		modelValue: '',
		disabled: false,
	},
	render: (args: any) => ({
		components: { BaseRadio },
		setup() {
			return { args }
		},
		template: `
			<BaseRadio v-bind="args" title="Редактировать профиль"></BaseRadio>
		`,
	}),
}
