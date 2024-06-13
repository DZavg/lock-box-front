import type { Meta, StoryObj } from '@storybook/vue3'
import EyeLinkIcon from '@/components/ui/Link/EyeLinkIcon.vue'

const meta: Meta<typeof EyeLinkIcon> = {
	component: EyeLinkIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-5&mode=design&t=D2Io8DLOR9CYljSr-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof EyeLinkIcon>

export const Default: Story = {
	args: {
		link: '/',
	},
}
