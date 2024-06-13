<template>
  <label
    :class="{
      ['radio--disabled']: disabled,
    }"
    class="radio"
  >
    <input
      v-model="inputValue"
      :disabled="disabled"
      :name="name"
      :value="value"
      hidden
      type="radio"
    >
    <span class="radio__circle">
      <span class="radio__point" />
    </span>
    {{ title }}
  </label>
</template>

<script lang="ts" setup>
interface Props {
	name: string
	modelValue: string
	value?: string
	disabled?: boolean
	title: string
}

withDefaults(defineProps<Props>(), {
	name: '',
	modelValue: '',
	value: '',
	disabled: false,
	title: '',
})

defineEmits<(e: 'update:modelValue', value: string) => void>()

const inputValue = defineModel<string>('modelValue', { default: '' })
</script>

<style lang="scss" scoped>
.radio {
	display: flex;
	align-items: center;
	color: $color-white;
	cursor: pointer;
	gap: $indent-xs;
	user-select: none;

	&__circle {
		display: flex;
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		border: 1px solid $color-white;
		border-radius: 50%;
		transition: border-color 0.1s ease-in;
	}

	&__point {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		transition: background-color 0.1s ease-in;
	}

	&--disabled {
		cursor: default;
		pointer-events: none;

		.radio__circle {
			border-color: $color-gray-four;
		}
	}

	&:hover {
		.radio__circle {
			border-color: $color-blue-secondary;
		}
	}

	&:active {
		.radio__circle {
			border-color: $color-blue-third;
		}
	}

	input:checked + .radio__circle {
		border-color: $color-blue-primary;

		.radio__point {
			background-color: $color-blue-primary;
		}
	}
}
</style>
