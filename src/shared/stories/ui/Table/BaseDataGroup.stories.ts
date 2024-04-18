import type { Meta, StoryObj } from '@storybook/vue3'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'
import { shallowRef } from 'vue'
import BaseDataTableGroup from '@/shared/ui/Table/BaseDataTableGroup.vue'
import TableActionList from '@/features/table/action-list/ui/TableActionList.vue'

const meta: Meta<typeof BaseDataTableGroup> = {
	component: BaseDataTableGroup,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-5&mode=design&t=UWE7ThyG50sSisTH-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseDataTableGroup>

export const Fill: Story = {
	args: {
		fields: [
			{
				label: 'Тип доступа',
				key: 'title',
				component: {
					name: shallowRef(BaseInput),
					props: (field: any, data: any) => {
						return {
							value: data.domain,
							name: data.name,
							placeholder: data.title,
						}
					},
					handlers: () => {
						return {
							click: () => {},
						}
					},
				},
			},
			{
				label: 'Адрес',
				key: 'domain',
			},
			{
				label: '',
				key: 'action',
				component: {
					name: shallowRef(TableActionList),
				},
			},
		],
		data: [
			{
				title: 'Бренд одежды "IVOLGA"',
				domain: 'ivolga.moscow',
				name: 'ivolga',
			},
			{
				title: 'Бренд одежды "IVOLGA" 2',
				domain: 'ivolga.moscow 2',
				name: 'ivolga_two',
			},
			{
				title: 'Бренд одежды "IVOLGA" 3',
				domain: 'ivolga.moscow 3',
				name: 'ivolga_three',
			},
		],
	},
}
