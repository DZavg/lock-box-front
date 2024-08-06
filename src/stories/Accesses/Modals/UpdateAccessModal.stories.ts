import type { Meta, StoryObj } from '@storybook/vue3'
import UpdateAccessModal from '@/components/Accesses/Modals/UpdateAccessModal.vue'

const meta: Meta<typeof UpdateAccessModal> = {
	component: UpdateAccessModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1134&mode=design&t=QqSUMl9N0Mq8lr2n-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof UpdateAccessModal>

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
