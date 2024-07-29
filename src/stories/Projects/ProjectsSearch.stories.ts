import type { Meta, StoryObj } from '@storybook/vue3'
import ProjectsSearch from '@/components/Projects/ProjectsSearch.vue'

const meta: Meta<typeof ProjectsSearch> = {
	component: ProjectsSearch,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=372-2828&t=lbkwlWLtHExJPiDT-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ProjectsSearch>

export const Default: Story = {}
