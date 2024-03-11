import type { Meta, StoryObj } from '@storybook/vue3'
import ConfirmActionModal from '@/shared/ui/Modal/ConfirmActionModal.vue'

const meta: Meta<typeof ConfirmActionModal> = {
	component: ConfirmActionModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=36-1747&mode=design&t=ykQhpj8W38LSOq4r-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ConfirmActionModal>

export const Default: Story = {
	args: {
		title: 'Вы действительно хотите удалить: Бренд одежды "IVOLGA"',
		text: 'Эти данные нельзя будет вернуть',
		buttonConfirmText: 'Удалить проект',
	},
}
