import type { Meta, StoryObj } from '@storybook/vue3'
import ProjectsActions from '@/components/Projects/ProjectsActions.vue'

const meta: Meta<typeof ProjectsActions> = {
	component: ProjectsActions,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-5&mode=design&t=MzNQp61K3y2BeRPm-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ProjectsActions>

export const Default: Story = {}
