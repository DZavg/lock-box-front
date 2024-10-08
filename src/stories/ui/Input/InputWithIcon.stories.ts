import type { Meta, StoryObj } from '@storybook/vue3'
import InputWithIcon from '@/components/ui/Input/InputWithIcon.vue'
import iconSearch from '/images/svg/icon-search.svg'
import BaseIcon from '@/components/ui/Icon/BaseIcon.vue'
import { IconSize } from '@/global/types/ui/icon/IconSize'

const meta: Meta<typeof InputWithIcon> = {
	component: InputWithIcon,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3697&mode=design&t=gx3S1080J5P0Gl8k-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof InputWithIcon>

export const Default: Story = {
	args: {
		name: 'search',
		placeholder: 'Поиск',
	},
	render: (args) => ({
		components: { InputWithIcon, BaseIcon },
		setup() {
			return { args, iconSearch, IconSize }
		},
		template: `
			<InputWithIcon v-bind="args">
			<BaseIcon :icon="iconSearch" :size="IconSize.S"/>
			</InputWithIcon>
		`,
	}),
}
