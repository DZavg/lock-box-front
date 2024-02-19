import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButtonLink from '@/shared/ui/Button/BaseButtonLink.vue'

const meta: Meta<typeof BaseButtonLink> = {
	component: BaseButtonLink,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseButtonLink>

export const Default: Story = {
	args: {
		link: '/',
	},
	render: (args: any) => ({
		components: { BaseButtonLink },
		setup() {
			return { args }
		},
		template: `
			<BaseButtonLink v-bind="args">Скопировать ссылку</BaseButtonLink>
		`,
	}),
}
