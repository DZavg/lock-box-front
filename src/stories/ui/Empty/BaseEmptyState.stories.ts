import type { Meta, StoryObj } from '@storybook/vue3'
import BaseEmptyState from '@/components/ui/Empty/BaseEmptyState.vue'

const meta: Meta<typeof BaseEmptyState> = {
	component: BaseEmptyState,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BaseEmptyState>

export const Default: Story = {
	args: {
		text: 'Нет проектов',
	},
}
