import type { Meta, StoryObj } from '@storybook/vue3'
import BasePoint from '@/components/ui/Point/BasePoint.vue'

const meta: Meta<typeof BasePoint> = {
	component: BasePoint,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=u3vNm8cro9yTyK3O-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BasePoint>

export const Default: Story = {}
