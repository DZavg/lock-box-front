import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTabs from '@/shared/ui/Tabs/BaseTabs.vue'
import BaseTabButton from '@/shared/ui/Tabs/BaseTabButton.vue'
import BaseTabContent from '@/shared/ui/Tabs/BaseTabContent.vue'

const meta: Meta<typeof BaseTabs> = {
	component: BaseTabs,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseTabs>

export const Default: Story = {
	render: (args: any) => ({
		components: { BaseTabs, BaseTabButton, BaseTabContent },
		setup() {
			return { args }
		},
		template: `
			<BaseTabs v-bind="args">
				<template #head>
					<BaseTabButton v-for="(_, index) in 5" :key="index" :index="index">Button {{index}}</BaseTabButton>
				</template>
				<template #body>
					<BaseTabContent v-for="(_, index) in 5" :key="index" :index="index">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur distinctio {{index}}</p>
					</BaseTabContent>
				</template>
			</BaseTabs>
		`,
	}),
	args: {
		activeIndex: 2,
	},
}
