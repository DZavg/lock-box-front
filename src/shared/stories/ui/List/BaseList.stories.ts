import type { Meta, StoryObj } from '@storybook/vue3'
import BaseList from '@/shared/ui/List/BaseList.vue'

const meta: Meta<typeof BaseList> = {
	component: BaseList,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=69-1854&mode=design&t=WltFT14tXoFPM1X6-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseList>

export const Default: Story = {
	args: {
		fields: [
			{
				label: 'Тип доступа',
				key: 'title',
			},
			{
				label: 'Адрес',
				key: 'domain',
			},
		],
		value: {
			title: 'Бренд одежды "IVOLGA"',
			domain: 'ivolga.moscow',
		},
	},
}
