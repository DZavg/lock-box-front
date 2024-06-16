import type { Meta, StoryObj } from '@storybook/vue3'
import BaseColumnGrid from '@/components/ui/Grid/BaseColumnGrid.vue'
import BaseCard from '@/components/ui/Card/BaseCard.vue'
import { Indent } from '@/global/types/ui/gap/Indent'

const meta: Meta<typeof BaseColumnGrid> = {
	component: BaseColumnGrid,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=69-1854&t=p5aNQ9GrsKsv8xjo-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseColumnGrid>

export const Default: Story = {
	render: () => ({
		components: { BaseColumnGrid, BaseCard, Indent },
		template: `
			<BaseColumnGrid>
			<BaseCard v-for="item in 5" :key="item">content</BaseCard>
			</BaseColumnGrid>
		`,
	}),
}
