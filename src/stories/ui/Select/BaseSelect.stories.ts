import type { Meta, StoryObj } from '@storybook/vue3'
import BaseSelect from '@/components/ui/Select/BaseSelect.vue'
import { ref } from 'vue'

const meta: Meta<typeof BaseSelect> = {
	component: BaseSelect,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3697&mode=design&t=tX6nRmPbFy7rfUAE-0',
		},
	},
	args: {
		name: 'type',
		label: 'Поле ввода',
		options: [
			{
				id: '0',
				title: 'SSH',
			},
			{
				id: '1',
				title: 'Домен',
			},
			{
				id: '2',
				title: 'База данных',
			},
			{
				id: '3',
				title: 'Хостинг',
			},
			{
				id: '4',
				title: 'Админка',
			},
		],
	},
	render: (args: any) => ({
		components: { BaseSelect },
		setup() {
			const form = ref({})
			return { args, form }
		},
		template: `
			<BaseSelect v-bind="args" v-model="form[args.name]"/>
		`,
	}),
}

export default meta
type Story = StoryObj<typeof BaseSelect>

export const Default: Story = {}

export const Loading: Story = {
	args: {
		loading: true,
	},
}
