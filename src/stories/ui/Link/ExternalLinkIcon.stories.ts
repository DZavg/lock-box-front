import type { Meta, StoryObj } from '@storybook/vue3'
import ExternalLinkIcon from '@/components/ui/Link/ExternalLinkIcon.vue'

const meta: Meta<typeof ExternalLinkIcon> = {
	component: ExternalLinkIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-5&mode=design&t=D2Io8DLOR9CYljSr-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof ExternalLinkIcon>

export const Default: Story = {
	args: {
		link: '/',
	},
}
