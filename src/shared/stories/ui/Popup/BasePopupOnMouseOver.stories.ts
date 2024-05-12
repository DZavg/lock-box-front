import type { Meta, StoryObj } from '@storybook/vue3'
import BasePopupOnMouseOver from '@/shared/ui/Popup/BasePopupOnMouseOver.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'

const meta: Meta<typeof BasePopupOnMouseOver> = {
	component: BasePopupOnMouseOver,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=12AFrrClxmvqiI7b-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BasePopupOnMouseOver>

export const Default: Story = {
	args: {},
	render: (args: any) => ({
		components: { BasePopupOnMouseOver, BaseButton },
		setup() {
			return { args }
		},
		template: `
			<BasePopupOnMouseOver v-bind="args">
			<template #head>
				<BaseButton>Button</BaseButton>
			</template>
			<template #body><p>hidden content</p></template>
			</BasePopupOnMouseOver>
		`,
	}),
}
