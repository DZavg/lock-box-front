import type { Meta, StoryObj } from '@storybook/vue3'
import DeleteButtonIcon from '@/components/ui/Button/DeleteButtonIcon.vue'

const meta: Meta<typeof DeleteButtonIcon> = {
	component: DeleteButtonIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof DeleteButtonIcon>

export const Default: Story = {}
