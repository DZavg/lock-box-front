import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTabs from '@/components/ui/Tabs/BaseTabs.vue'
import BaseTabButton from '@/components/ui/Tabs/BaseTabButton.vue'
import BaseTabContent from '@/components/ui/Tabs/BaseTabContent.vue'

const meta: Meta<typeof BaseTabs> = {
	component: BaseTabs,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-2&mode=design&t=bLsFZyxvDIeXQk3J-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseTabs>

export const Default: Story = {
	render: (args) => ({
		components: { BaseTabs, BaseTabButton, BaseTabContent },
		setup() {
			return { args }
		},
		template: `
			<BaseTabs v-bind="args">
			<template #head>
				<BaseTabButton v-for="(_, index) in 5" :key="index" :name="String(index)">Button {{ index }}</BaseTabButton>
			</template>
			<template #body>
				<BaseTabContent v-for="(_, index) in 5" :key="index" :name="String(index)">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur distinctio
						{{ index }}</p>
				</BaseTabContent>
			</template>
			</BaseTabs>
		`,
	}),
	args: {
		activeTabName: '0',
	},
}
