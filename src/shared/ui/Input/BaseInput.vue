<template>
	<div class="input">
		<label class="input__wrapper">
			<span class="input__label caption_p">{{ label }}</span>
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
		<BaseError :text="error" />
	</div>
</template>

<script lang="ts" setup>
import { type InputTypeHTMLAttribute } from 'vue'
import BaseError from '@/shared/ui/Error/BaseError.vue'

interface Props {
	name: string
	modelValue?: string
	label: string
	placeholder: string
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
	&,
	&__wrapper {
		display: inline-flex;
		flex-direction: column;
		gap: $indent-2xs;
	}

	&__label {
		color: $color-gray-secondary;
		user-select: none;
	}

	&__element {
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
