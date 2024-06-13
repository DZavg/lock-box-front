import type { Meta, StoryObj } from '@storybook/vue3'
import LogoWithDescription from '@/components/ui/Logo/LogoWithDescription.vue'

const meta: Meta<typeof LogoWithDescription> = {
	component: LogoWithDescription,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=47-1689&mode=design&t=zJWQjiCQ8vXk6kyc-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof LogoWithDescription>

export const Default: Story = {}
