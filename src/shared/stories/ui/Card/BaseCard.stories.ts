import type { Meta, StoryObj } from '@storybook/vue3'
import BaseCard from '@/shared/ui/Card/BaseCard.vue'

const meta: Meta<typeof BaseCard> = {
	component: BaseCard,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=78-2533&mode=design&t=1WAfm3g4xTb96TdA-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseCard>

export const Default: Story = {
	render: (args: any) => ({
		components: { BaseCard },
		setup() {
			return { args }
		},
		template: `
			<BaseCard v-bind="args">test</BaseCard>
		`,
	}),
}
