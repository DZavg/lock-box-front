import type { Meta, StoryObj } from '@storybook/vue3'
import getTableFields from '@/shared/stories/data/table'
import getProjects from '@/shared/stories/data/projects'
import BaseTableCardList from '@/shared/ui/Table/BaseTableCardList.vue'

const meta: Meta<typeof BaseTableCardList> = {
	component: BaseTableCardList,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-5&mode=design&t=UWE7ThyG50sSisTH-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseTableCardList>

export const Default: Story = {
	args: {
		fields: getTableFields(),
		data: getProjects(),
	},
}
