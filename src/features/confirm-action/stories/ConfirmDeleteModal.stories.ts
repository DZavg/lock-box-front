import type { Meta, StoryObj } from '@storybook/vue3'
import ConfirmDeleteModal from '@/features/confirm-action/ui/ConfirmDeleteModal.vue'

const meta: Meta<typeof ConfirmDeleteModal> = {
	component: ConfirmDeleteModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yiwz4CV3I5rx5y4M-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ConfirmDeleteModal>

export const Default: Story = {
	args: {
		title: 'Бренд одежды "IVOLGA"',
		buttonConfirmText: 'Удалить проект',
	},
}
