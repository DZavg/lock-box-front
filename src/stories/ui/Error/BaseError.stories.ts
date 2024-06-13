import type { Meta, StoryObj } from '@storybook/vue3'
import BaseError from '@/components/ui/Error/BaseError.vue'

const meta: Meta<typeof BaseError> = {
	component: BaseError,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3697&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseError>

export const Default: Story = {
	args: {
		text: 'Длина поля должна быть более пяти символов',
	},
}
