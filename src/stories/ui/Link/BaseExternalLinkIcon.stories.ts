import type { Meta, StoryObj } from '@storybook/vue3'
import iconClose from '/images/svg/icon-close.svg'
import BaseExternalLinkIcon from '@/components/ui/Link/BaseExternalLinkIcon.vue'
import { IconSize } from '@/global/types/ui/icon/IconSize'

const meta: Meta<typeof BaseExternalLinkIcon> = {
	component: BaseExternalLinkIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseExternalLinkIcon>

export const Default: Story = {
	args: {
		icon: iconClose,
		size: IconSize.M,
		link: '/',
	},
}
