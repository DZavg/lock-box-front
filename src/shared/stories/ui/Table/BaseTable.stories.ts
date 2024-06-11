import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTable from '@/shared/ui/Table/BaseTable.vue'

const meta: Meta<typeof BaseTable> = {
	component: BaseTable,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=ykQhpj8W38LSOq4r-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseTable>

export const Fill: Story = {
	render: () => ({
		components: {
			BaseTable,
		},
		template: `
			<BaseTable>
			<template #head>
				<tr>
					<th>Тип доступа</th>
					<th>Адрес</th>
					<th>Логин</th>
				</tr>
			</template>
			<template #body>
				<tr>
					<td>SSH</td>
					<td>https://music.yandex.ru</td>
					<td>Mbalilyne35</td>
				</tr>
			</template>
			</BaseTable>
		`,
	}),
}
