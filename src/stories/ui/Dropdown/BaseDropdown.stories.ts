import type { Meta, StoryObj } from '@storybook/vue3'
import BaseDropdown from '@/components/ui/Dropdown/BaseDropdown.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'

const meta: Meta<typeof BaseDropdown> = {
	component: BaseDropdown,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=QAjpnzANir09AxI3-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseDropdown>

export const Default: Story = {
	args: {
		isActive: false,
	},
	render: (args: any) => ({
		components: { BaseDropdown, BaseButton },
		setup() {
			const toggleDropdown = () => {
				args.isActive = !args.isActive
			}
			return { args, toggleDropdown }
		},
		template: `
			<BaseDropdown v-bind="args">
			<template #title><p>Иванов Иван</p></template>
			<template #button>
				<BaseButton @onClick="toggleDropdown">Открыть/закрыть</BaseButton>
			</template>
			<template #content>
				<p>hidden content</p>
			</template>
			</BaseDropdown>
		`,
	}),
}
