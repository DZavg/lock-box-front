import type { Meta, StoryObj } from '@storybook/vue3'
import getTableFields from '@/shared/stories/data/table'
import getProjects from '@/shared/stories/data/projects'
import BaseTableCard from '@/shared/ui/Table/BaseTableCard.vue'

const meta: Meta<typeof BaseTableCard> = {
	component: BaseTableCard,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-5&mode=design&t=UWE7ThyG50sSisTH-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseTableCard>

export const Default: Story = {
	args: {
		fields: getTableFields(),
		data: getProjects()[0],
	},
}
