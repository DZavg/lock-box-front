import type { Meta, StoryObj } from '@storybook/vue3'
import ProjectActionList from '@/features/project/action-list/ui/ProjectActionList.vue'

const meta: Meta<typeof ProjectActionList> = {
	component: ProjectActionList,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-5&mode=design&t=waTT9mZL0rjya0sz-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ProjectActionList>

export const Default: Story = {}
