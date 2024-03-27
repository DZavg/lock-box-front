import type { Meta, StoryObj } from '@storybook/vue3'
import BaseLinkButton from '@/shared/ui/Link/BaseLinkButton.vue'
import { ButtonBackground } from '@/shared/types/Button/ButtonBackground'

const meta: Meta<typeof BaseLinkButton> = {
	component: BaseLinkButton,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=47-2488&mode=design&t=yWT03SRs5re1Us5z-0',
		},
	},
	argTypes: {
		background: {
			control: 'radio',
			options: ButtonBackground,
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseLinkButton>

export const Fill: Story = {
	args: {
		background: ButtonBackground.Fill,
	},
	render: (args: any) => ({
		components: { BaseLinkButton },
		setup() {
			return { args }
		},
		template: `
			<BaseLinkButton v-bind="args">Скопировать пароль</BaseLinkButton>
		`,
	}),
}

export const Border: Story = {
	args: {
		background: ButtonBackground.Border,
	},
	render: (args: any) => ({
		components: { BaseLinkButton },
		setup() {
			return { args }
		},
		template: `
			<BaseLinkButton v-bind="args">Скопировать пароль</BaseLinkButton>
		`,
	}),
}
