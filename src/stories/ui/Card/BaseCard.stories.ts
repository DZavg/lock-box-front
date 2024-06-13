import type { Meta, StoryObj } from '@storybook/vue3'
import BaseCard from '@/components/ui/Card/BaseCard.vue'
import { BorderRadius } from '@/shared/model/types/Border/BorderRadius'
import { CardPaddingSize } from '@/shared/model/types/Card/CardPaddingSize'

const meta: Meta<typeof BaseCard> = {
	component: BaseCard,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=78-2533&mode=design&t=1WAfm3g4xTb96TdA-0',
		},
		slots: {
			default: {
				template: `test`,
			},
		},
	},
	argTypes: {
		borderRadius: {
			control: 'select',
			options: BorderRadius,
		},
		paddingSize: {
			control: 'select',
			options: CardPaddingSize,
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseCard>

export const Default: Story = {
	args: {
		paddingSize: CardPaddingSize.Medium,
		borderRadius: BorderRadius.S,
	},
}
