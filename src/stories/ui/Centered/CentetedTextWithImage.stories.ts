import type { Meta, StoryObj } from '@storybook/vue3'
import CenteredTextWithImage from '@/components/ui/Centered/CenteredTextWithImage.vue'

const meta: Meta<typeof CenteredTextWithImage> = {
	component: CenteredTextWithImage,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CenteredTextWithImage>

export const Default: Story = {
	args: {
		image: {
			src: 'https://placehold.co/168x168/orange/white',
			alt: 'alt',
			title: 'title',
		},
		text: 'text',
	},
}
