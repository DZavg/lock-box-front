import type { Meta, StoryObj } from '@storybook/vue3'
import iconClose from '/images/svg/icon-close.svg'
import BaseLinkIcon from '@/components/ui/Link/BaseLinkIcon.vue'
import { IconSize } from '@/global/types/ui/icon/IconSize'

const meta: Meta<typeof BaseLinkIcon> = {
	component: BaseLinkIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseLinkIcon>

export const Default: Story = {
	args: {
		icon: iconClose,
		size: IconSize.M,
		link: '/',
	},
}
