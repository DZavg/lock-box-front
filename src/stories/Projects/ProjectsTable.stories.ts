import type { Meta, StoryObj } from '@storybook/vue3'
import ProjectsTable from '@/components/Projects/ProjectsTable.vue'
import getProjects from '@/stories/data/projects'

const meta: Meta<typeof ProjectsTable> = {
	component: ProjectsTable,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=1-5&t=TQF51cOOVifctsZn-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ProjectsTable>

export const Default: Story = {
	args: {
		projects: getProjects(),
	},
}
