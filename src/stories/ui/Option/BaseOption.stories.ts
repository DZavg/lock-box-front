import type { Meta, StoryObj } from '@storybook/vue3'
import BaseOption from '@/components/ui/Option/BaseOption.vue'

const meta: Meta<typeof BaseOption> = {
	component: BaseOption,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=QAjpnzANir09AxI3-0',
		},
		slots: {
			default: {
				template: `Option title`,
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseOption>

export const Default: Story = {}
