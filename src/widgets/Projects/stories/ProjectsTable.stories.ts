import type { Meta, StoryObj } from '@storybook/vue3'
import ProjectsTable from '@/widgets/Projects/ui/ProjectsTable.vue'

const meta: Meta<typeof ProjectsTable> = {
	component: ProjectsTable,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-5&mode=design&t=D2Io8DLOR9CYljSr-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ProjectsTable>

export const Default: Story = {}
