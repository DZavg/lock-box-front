import type { Meta, StoryObj } from '@storybook/vue3'
import CreateAccessModal from '@/components/Accesses/Modals/CreateAccessModal.vue'

const meta: Meta<typeof CreateAccessModal> = {
	component: CreateAccessModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1134&mode=design&t=QqSUMl9N0Mq8lr2n-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof CreateAccessModal>

export const Default: Story = {}
