import type { Meta, StoryObj } from '@storybook/vue3'
import TableCardWithActionList from '@/features/table/action-list/ui/TableCardWithActionList.vue'
import type { TableField } from '@/shared/model/types/Table/Table'
import type { Project } from '@/shared/model/types/Project/Project'
import getProjects from '@/shared/stories/data/projects'

const meta: Meta<typeof TableCardWithActionList> = {
	component: TableCardWithActionList,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=69-1854&t=TQF51cOOVifctsZn-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof TableCardWithActionList>

const tableFields: TableField<keyof Project>[] = [
	{
		label: 'Название проекта',
		key: 'title',
	},
	{
		label: 'Домен',
		key: 'domain',
	},
]

export const Default: Story = {
	args: {
		fields: tableFields,
		value: getProjects()[0],
		externalLink: 'https://google.com',
		link: '/',
		copyLink: 'google.com',
	},
}