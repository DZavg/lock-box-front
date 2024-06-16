import type { Meta, StoryObj } from '@storybook/vue3'
import BaseImage from '@/components/ui/Image/BaseImage.vue'

const meta: Meta<typeof BaseImage> = {
	component: BaseImage,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseImage>

export const Default: Story = {
	args: {
		image: {
			src: 'https://placehold.co/168x168/orange/white',
			alt: 'Сожалеем, но ничего не найдено',
			title: 'Сожалеем, но ничего не найдено',
		},
	},
}
