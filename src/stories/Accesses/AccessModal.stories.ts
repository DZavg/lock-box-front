import type { Meta, StoryObj } from '@storybook/vue3'
import AccessModal from '@/components/Accesses/AccessModal.vue'

const meta: Meta<typeof AccessModal> = {
	component: AccessModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1134&mode=design&t=QqSUMl9N0Mq8lr2n-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof AccessModal>

export const Default: Story = {}
