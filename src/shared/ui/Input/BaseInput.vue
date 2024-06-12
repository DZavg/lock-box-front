<template>
  <div class="input">
    <BaseLabel :label="label" />
    <div class="input__wrapper">
      <label>
        <input
          ref="input"
          v-model="inputValue"
          :autocomplete="autocomplete"
          :class="{ ['input__element--error']: error }"
          :disabled="disabled"
          :name="name"
          :placeholder="placeholder"
          :type="type"
          class="input__element body_p"
        >
      </label>
      <slot name="icon" />
    </div>
    <BaseError
      v-if="error"
      :text="error"
    />
  </div>
</template>

<script lang="ts" setup>
import { type InputTypeHTMLAttribute, ref, type Ref } from 'vue'
import BaseError from '@/shared/ui/Error/BaseError.vue'
import BaseLabel from '@/shared/ui/Label/BaseLabel.vue'

interface Props {
	name: string
	label?: string
	placeholder?: string
	error?: string
	type?: InputTypeHTMLAttribute
	disabled?: boolean
	autocomplete?: string
}

withDefaults(defineProps<Props>(), {
	name: '',
	label: '',
	placeholder: '',
	error: '',
	type: 'text',
	disabled: false,
	autocomplete: 'on',
})

defineEmits<(e: 'update:modelValue', value: string) => void>()

const inputValue = defineModel<string>('modelValue', { default: '' })

const input: Ref<HTMLElement | null> = ref(null)

defineExpose({
	input,
})
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
		border-radius: $border-radius-s;
		background-color: $color-dark-third;
		color: $color-white;
		transition: border-color 0.15s ease-in;

		&--error {
			border-color: $color-error;
		}

		&::placeholder {
			color: $color-gray-secondary;
		}

		&:disabled {
			border-color: $color-gray-third;
			color: $color-gray-third;
		}

		&:focus {
			border-color: $color-blue-primary;
		}
	}
}
</style>
