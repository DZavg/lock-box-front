import type { Meta, StoryObj } from '@storybook/vue3'
import CenteredContent from '@/components/ui/Centered/CenteredContent.vue'

const meta: Meta<typeof CenteredContent> = {
	component: CenteredContent,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CenteredContent>

export const Default: Story = {
	render: () => ({
		components: { CenteredContent },
		template: `
			<CenteredContent>text</CenteredContent>
		`,
	}),
}
