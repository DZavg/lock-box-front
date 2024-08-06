import type { Meta, StoryObj } from '@storybook/vue3'
import ConfirmDeleteProjectModal from '@/components/Projects/Modals/ConfirmDeleteProjectModal.vue'

const meta: Meta<typeof ConfirmDeleteProjectModal> = {
	component: ConfirmDeleteProjectModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=36-1747&t=daFNEC38Q698xVl9-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ConfirmDeleteProjectModal>

export const Default: Story = {
	args: {
		project: {
			title: 'figma',
			domain: 'https://figma.com/',
			id: '0',
		},
	},
}
