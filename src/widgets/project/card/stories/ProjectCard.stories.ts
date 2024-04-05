import type { Meta, StoryObj } from '@storybook/vue3'
import ProjectCard from '@/widgets/project/card/ui/ProjectCard.vue'

const meta: Meta<typeof ProjectCard> = {
	component: ProjectCard,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=69-1854&mode=design&t=vCxSeY0y6ApRh0rO-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {
	args: {
		project: {
			id: '0',
			title: 'Бренд одежды "IVOLGA"',
			domain: 'ivolga.moscow',
		},
	},
}
