import type { Meta, StoryObj } from '@storybook/vue3'
import BaseForm from '@/components/ui/Form/BaseForm.vue'
import BaseInput from '@/components/ui/Input/BaseInput.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'

const meta: Meta<typeof BaseForm> = {
	component: BaseForm,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=1-2&mode=design&t=6ngpJBBHFj4nsuMb-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseForm>

export const Default: Story = {
	render: () => ({
		components: { BaseForm, BaseInput, BaseButton },
		setup() {
			const submitForm = () => {
				console.log('Form has been sent')
			}
			return { submitForm }
		},
		template: `
			<BaseForm @submit="submitForm">
			<BaseInput name="name"/>
			<BaseButton>Отправить форму</BaseButton>
			</BaseForm>
		`,
	}),
}
