<template>
	<div class="input">
		<BaseLabel :label="label" />
		<div class="input__wrapper">
			<label>
				<input
					:class="{ ['input__element--error']: error }"
					class="input__element body_p"
					v-model="inputValue"
					:name="name"
					:placeholder="placeholder"
					:disabled="disabled"
					:type="type"
					:autocomplete="autocomplete"
				/>
			</label>
			<slot></slot>
		</div>
		<BaseError v-if="error" :text="error" />
	</div>
</template>

<script lang="ts" setup>
import { type InputTypeHTMLAttribute } from 'vue'
import BaseError from '@/shared/ui/Error/BaseError.vue'
import BaseLabel from '@/shared/ui/Label/BaseLabel.vue'

interface Props {
	name: string
	modelValue?: string
	label?: string
	placeholder?: string
	error?: string
	type?: InputTypeHTMLAttribute
	disabled?: boolean
	autocomplete?: string
}

withDefaults(defineProps<Props>(), {
	name: '',
	modelValue: '',
	label: '',
	placeholder: '',
	error: '',
	type: 'text',
	disabled: false,
	autocomplete: 'off',
})

defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const inputValue = defineModel('modelValue', { default: '' })
</script>

<style lang="scss" scoped>
.input {
	display: inline-flex;
	flex-direction: column;
	gap: $indent-2xs;

	&__element {
		width: 100%;
		padding: 12px $indent-s;
		border: 1px solid transparent;
		background-color: $color-dark-third;
		border-radius: $border-radius-s;
		color: $color-white;
		transition: border-color 0.15s ease-in;

		&--error {
			border-color: $color-error;
		}

		&::placeholder {
			color: $color-gray-secondary;
		}

		&:disabled {
			color: $color-gray-third;
			border-color: $color-gray-third;
		}

		&:focus {
			border-color: $color-blue-primary;
		}
	}
}
</style>
