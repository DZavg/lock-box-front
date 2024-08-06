import type { Meta, StoryObj } from '@storybook/vue3'
import ConfirmDeleteAccessModal from '@/components/Accesses/Modals/ConfirmDeleteAccessModal.vue'

const meta: Meta<typeof ConfirmDeleteAccessModal> = {
	component: ConfirmDeleteAccessModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=36-1783&t=daFNEC38Q698xVl9-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ConfirmDeleteAccessModal>

export const Default: Story = {
	args: {
		access: {
			id: '0',
			origin: 'https://figma.com/',
			login: 'figma',
			type: {
				id: '0',
				title: 'другое',
			},
		},
	},
}
