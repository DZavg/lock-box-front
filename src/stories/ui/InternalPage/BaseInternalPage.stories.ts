import type { Meta, StoryObj } from '@storybook/vue3'
import BaseInternalPage from '@/components/ui/InternalPage/BaseInternalPage.vue'
import getBreadcrumbs from '@/stories/data/breadcrumbs'
import BaseButton from '@/components/ui/Button/BaseButton.vue'

const meta: Meta<typeof BaseInternalPage> = {
	component: BaseInternalPage,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=MzNQp61K3y2BeRPm-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseInternalPage>

export const Default: Story = {
	args: {
		breadcrumbs: getBreadcrumbs(),
		titleH1: 'Бренд одежды "IVOLGA"',
		additionalText: 'ivolga.moscow',
	},
	render: (args: any) => ({
		components: { BaseInternalPage, BaseButton },
		setup() {
			return { args }
		},
		template: `
			<BaseInternalPage v-bind="args">
			<template #head>
				<BaseButton>Добавить доступ</BaseButton>
			</template>
			<template #default>
				<p>content</p>
			</template>
			</BaseInternalPage>
		`,
	}),
}
