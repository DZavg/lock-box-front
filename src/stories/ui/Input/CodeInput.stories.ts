import type { Meta, StoryObj } from '@storybook/vue3'
import CodeInput from '@/components/ui/Input/CodeInput.vue'

const meta: Meta<typeof CodeInput> = {
	component: CodeInput,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=562-3297&t=zthDdBtZljXJ1C91-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof CodeInput>

export const Default: Story = {}
