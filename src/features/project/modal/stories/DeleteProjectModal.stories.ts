import type { Meta, StoryObj } from '@storybook/vue3'
import DeleteProjectModal from '@/features/project/modal/ui/DeleteProjectModal.vue'

const meta: Meta<typeof DeleteProjectModal> = {
	component: DeleteProjectModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yiwz4CV3I5rx5y4M-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof DeleteProjectModal>

export const Default: Story = {
	args: {
		projectTitle: 'Бренд одежды "IVOLGA"',
	},
}
