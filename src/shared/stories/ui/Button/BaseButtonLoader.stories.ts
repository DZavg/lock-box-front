import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButtonLoader from '@/shared/ui/Button/BaseButtonLoader.vue'

const meta: Meta<typeof BaseButtonLoader> = {
	component: BaseButtonLoader,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-4880&mode=design&t=xtqnNljh5dqIFBuN-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseButtonLoader>

export const Default: Story = {}
