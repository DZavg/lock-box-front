import type { Meta, StoryObj } from '@storybook/vue3'
import EditProjectModal from '@/features/ui/Project/EditProjectModal.vue'

const meta: Meta<typeof EditProjectModal> = {
	component: EditProjectModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yiwz4CV3I5rx5y4M-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof EditProjectModal>

export const Default: Story = {}
