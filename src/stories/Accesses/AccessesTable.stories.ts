import type { Meta, StoryObj } from '@storybook/vue3'
import AccessesTable from '@/components/Accesses/AccessesTable.vue'
import getAccesses from '@/global/mock/access'

const meta: Meta<typeof AccessesTable> = {
	component: AccessesTable,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/JrFyfzV8shSxNFSTQdqb4J/password-storage?node-id=1-5&t=TQF51cOOVifctsZn-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof AccessesTable>

export const Default: Story = {
	args: {
		accesses: getAccesses(),
	},
}
