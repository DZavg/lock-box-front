import type { Meta, StoryObj } from '@storybook/vue3'
import DropdownButtonIcon from '@/shared/ui/Button/DropdownButtonIcon.vue'

const meta: Meta<typeof DropdownButtonIcon> = {
	component: DropdownButtonIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3697&mode=design&t=ZF0ASkpzmKWe1Dta-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof DropdownButtonIcon>

export const Default: Story = {}
