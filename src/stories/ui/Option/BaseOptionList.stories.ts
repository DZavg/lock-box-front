import type { Meta, StoryObj } from '@storybook/vue3'
import BaseOptionList from '@/components/ui/Option/BaseOptionList.vue'
import BaseOption from '@/components/ui/Option/BaseOption.vue'

const meta: Meta<typeof BaseOptionList> = {
	component: BaseOptionList,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=QAjpnzANir09AxI3-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseOptionList>

export const Default: Story = {
	args: {},
	render: (args) => ({
		components: { BaseOptionList, BaseOption },
		setup() {
			return { args }
		},
		template: `
			<BaseOptionList v-bind="args">
				<BaseOption v-for="item in 10">Option title {{item}}</BaseOption>
			</BaseOptionList>
		`,
	}),
}
