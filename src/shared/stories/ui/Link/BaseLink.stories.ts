import type { Meta, StoryObj } from '@storybook/vue3'
import BaseLink from '@/shared/ui/Link/BaseLink.vue'
import { Color } from '@/shared/model/types/Color/Color'

const meta: Meta<typeof BaseLink> = {
	component: BaseLink,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=47-2488&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
	argTypes: {
		color: {
			control: 'radio',
			options: Color,
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseLink>

export const BluePrimary: Story = {
	args: {
		link: '/',
		target: '_self',
		color: Color.BluePrimary,
	},
	render: (args: any) => ({
		components: { BaseLink },
		setup() {
			return { args }
		},
		template: `
			<BaseLink v-bind="args">Восстановить пароль</BaseLink>
		`,
	}),
}

export const White: Story = {
	args: {
		link: '/',
		target: '_self',
		color: Color.White,
	},
	render: (args: any) => ({
		components: { BaseLink },
		setup() {
			return { args }
		},
		template: `
			<BaseLink v-bind="args">Восстановить пароль</BaseLink>
		`,
	}),
}
