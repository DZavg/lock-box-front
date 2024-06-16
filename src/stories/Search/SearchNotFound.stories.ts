import type { Meta, StoryObj } from '@storybook/vue3'
import SearchNotFound from '@/components/Search/SearchNotFound.vue'

const meta: Meta<typeof SearchNotFound> = {
	component: SearchNotFound,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=372-2828&t=p5aNQ9GrsKsv8xjo-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof SearchNotFound>

export const Default: Story = {}
