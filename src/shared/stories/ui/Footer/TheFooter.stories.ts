import type { Meta, StoryObj } from '@storybook/vue3'
import TheFooter from '@/shared/ui/Footer/TheFooter.vue'

const meta: Meta<typeof TheFooter> = {
	component: TheFooter,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-5&mode=design&t=yiwz4CV3I5rx5y4M-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof TheFooter>

export const Default: Story = {}
