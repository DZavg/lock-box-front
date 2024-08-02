import type { Meta, StoryObj } from '@storybook/vue3'
import BasePageLoading from '@/components/ui/Page/BasePageLoading.vue'

const meta: Meta<typeof BasePageLoading> = {
	component: BasePageLoading,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=719-3345&t=IkI1pUgRvso4bmEf-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BasePageLoading>

export const Default: Story = {}
