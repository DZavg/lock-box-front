import type { Meta, StoryObj } from '@storybook/vue3'
import ProjectCardList from '@/widgets/project/card/ui/ProjectCardList.vue'
import getProjects from '@/shared/stories/data/projects'

const meta: Meta<typeof ProjectCardList> = {
	component: ProjectCardList,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=69-1854&mode=design&t=vCxSeY0y6ApRh0rO-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ProjectCardList>

export const Default: Story = {
	args: {
		projects: getProjects(),
	},
}
