import type { Meta, StoryObj } from '@storybook/vue3'
import LoadingIcon from '@/components/ui/Loading/LoadingIcon.vue'

const meta: Meta<typeof LoadingIcon> = {
	component: LoadingIcon,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoadingIcon>

export const Default: Story = {}
