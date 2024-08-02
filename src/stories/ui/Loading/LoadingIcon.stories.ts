import type { Meta, StoryObj } from '@storybook/vue3'
import LoadingIcon from '@/components/ui/Loading/LoadingIcon.vue'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import { Color } from '@/global/types/ui/color/Color'

const meta: Meta<typeof LoadingIcon> = {
	component: LoadingIcon,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoadingIcon>

export const Default: Story = {
	args: {
		size: IconSize.ThreeXL,
		color: Color.White,
	},
}
