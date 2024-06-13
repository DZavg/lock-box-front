import type { Meta, StoryObj } from '@storybook/vue3'
import AuthPageWrapper from '@/components/Auth/AuthPageWrapper.vue'
import LogoWithDescription from '@/components/ui/Logo/LogoWithDescription.vue'

const meta: Meta<typeof AuthPageWrapper> = {
	component: AuthPageWrapper,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-2&mode=design&t=6ngpJBBHFj4nsuMb-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof AuthPageWrapper>

export const Default: Story = {
	args: {},
	render: (args: any) => ({
		components: { AuthPageWrapper, LogoWithDescription },
		setup() {
			return { args }
		},
		template: `
			<AuthPageWrapper v-bind="args">
			<LogoWithDescription/>
			<p>center content</p>
			</AuthPageWrapper>
		`,
	}),
}
