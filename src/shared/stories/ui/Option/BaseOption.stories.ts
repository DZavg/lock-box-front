import type { Meta, StoryObj } from '@storybook/vue3'
import BaseOption from '@/shared/ui/Option/BaseOption.vue'

const meta: Meta<typeof BaseOption> = {
	component: BaseOption,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=QAjpnzANir09AxI3-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseOption>

export const Default: Story = {
	args: {},
	render: (args: any) => ({
		components: { BaseOption },
		setup() {
			return { args }
		},
		template: `
			<BaseOption v-bind="args">Option title</BaseOption>
		`,
	}),
}
