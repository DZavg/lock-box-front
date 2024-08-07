import type { Meta, StoryObj } from '@storybook/vue3'
import InputList from '@/components/ui/Input/InputList.vue'
import BaseInput from '@/components/ui/Input/BaseInput.vue'

const meta: Meta<typeof InputList> = {
	component: InputList,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-2&mode=design&t=r8O0qaaFaTY2u1zT-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof InputList>

export const Default: Story = {
	render: () => ({
		components: { InputList, BaseInput },
		template: `
			<InputList>
			<BaseInput name="email" placeholder="email@gmail.com" v-for="i in 6" :key="i"/>
			</InputList>
		`,
	}),
}
