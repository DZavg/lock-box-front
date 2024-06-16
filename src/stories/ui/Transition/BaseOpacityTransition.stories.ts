import type { Meta, StoryObj } from '@storybook/vue3'
import BaseCard from '@/components/ui/Card/BaseCard.vue'
import BaseOpacityTransition from '@/components/ui/Transition/BaseOpacityTransition.vue'
import { type Ref, ref } from 'vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'

const meta: Meta<typeof BaseOpacityTransition> = {
	component: BaseOpacityTransition,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BaseOpacityTransition>

export const Default: Story = {
	render: () => ({
		setup() {
			const showContent: Ref<boolean> = ref(false)
			return { showContent }
		},
		components: { BaseOpacityTransition, BaseCard, BaseButton },
		template: `
			<BaseButton @click="showContent = !showContent">show content</BaseButton>
			<BaseOpacityTransition>
				<div v-if="showContent">
					<BaseCard>content</BaseCard>
				</div>
			</BaseOpacityTransition>
		`,
	}),
}
