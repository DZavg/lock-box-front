import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTwoColumnGrid from '@/components/ui/Grid/BaseTwoColumnGrid.vue'
import BaseCard from '@/components/ui/Card/BaseCard.vue'
import { Indent } from '@/global/types/ui/gap/Indent'

const meta: Meta<typeof BaseTwoColumnGrid> = {
	component: BaseTwoColumnGrid,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=69-1854&t=p5aNQ9GrsKsv8xjo-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseTwoColumnGrid>

export const Default: Story = {
	render: () => ({
		components: { BaseTwoColumnGrid, BaseCard, Indent },
		template: `
			<BaseTwoColumnGrid>
			<BaseCard v-for="item in 5" :key="item">content</BaseCard>
			</BaseTwoColumnGrid>
		`,
	}),
}
