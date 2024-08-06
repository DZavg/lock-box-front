import type { Meta, StoryObj } from '@storybook/vue3'
import CreateProjectModal from '@/components/Projects/Modals/CreateProjectModal.vue'

const meta: Meta<typeof CreateProjectModal> = {
	component: CreateProjectModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yiwz4CV3I5rx5y4M-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof CreateProjectModal>

export const Default: Story = {}
