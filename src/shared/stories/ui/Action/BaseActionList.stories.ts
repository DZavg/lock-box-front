import type { Meta, StoryObj } from '@storybook/vue3'
import BaseActionList from '@/shared/ui/Action/BaseActionList.vue'
import EditButtonIcon from '@/shared/ui/Button/EditButtonIcon.vue'
import DeleteButtonIcon from '@/shared/ui/Button/DeleteButtonIcon.vue'

const meta: Meta<typeof BaseActionList> = {
	component: BaseActionList,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=waTT9mZL0rjya0sz-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseActionList>

export const Default: Story = {
	render: (args: any) => ({
		components: { BaseActionList, EditButtonIcon, DeleteButtonIcon },
		setup() {
			return { args }
		},
		template: `
			<BaseActionList>
			<EditButtonIcon/>
			<DeleteButtonIcon/>
			</BaseActionList>
		`,
	}),
}
