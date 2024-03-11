import type { Meta, StoryObj } from '@storybook/vue3'
import BaseModal from '@/shared/ui/Modal/BaseModal.vue'

const meta: Meta<typeof BaseModal> = {
	component: BaseModal,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=27-1114&mode=design&t=Tv31JZ2gceHvRaZa-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseModal>

export const Default: Story = {
	args: {},
	render: (args: any) => ({
		components: { BaseModal },
		setup() {
			return { args }
		},
		template: `
			<BaseModal v-bind="args">
				<div>modal</div>
			</BaseModal>
		`,
	}),
}
