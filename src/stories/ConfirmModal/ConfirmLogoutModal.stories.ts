import type { Meta, StoryObj } from '@storybook/vue3'
import ConfirmLogoutModal from '@/components/ConfirmModals/ConfirmLogoutModal.vue'

const meta: Meta<typeof ConfirmLogoutModal> = {
	component: ConfirmLogoutModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=36-1796&t=M4D0Inaqo7dFsRoL-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ConfirmLogoutModal>

export const Default: Story = {}
