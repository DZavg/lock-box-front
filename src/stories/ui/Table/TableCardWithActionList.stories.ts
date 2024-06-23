import type { Meta, StoryObj } from '@storybook/vue3'
import TableCardWithActionList from '@/components/ui/Table/TableCardWithActionList.vue'
import type { TableField } from '@/global/types/ui/table/Table'
import type { Project } from '@/api/project/entity/Project'
import getProjects from '@/global/mock/projects'

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
	},
}
