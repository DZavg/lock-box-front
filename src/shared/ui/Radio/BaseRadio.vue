<template>
	<label
		class="radio"
		:class="{
			['radio--disabled']: disabled,
		}"
	>
		<input
			v-model="inputValue"
			type="radio"
			:value="value"
			:name="name"
			:disabled="disabled"
			hidden
		/>
		<span class="radio__circle">
			<span class="radio__point"></span>
		</span>
		<span class="radio__title">
			<slot></slot>
		</span>
	</label>
</template>

<script lang="ts" setup>
interface Props {
	name: string
	modelValue: string
	value?: string
	disabled?: boolean
}

withDefaults(defineProps<Props>(), {
	name: '',
	modelValue: '',
	value: '',
	disabled: false,
})

defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const inputValue = defineModel('modelValue', { default: '' })
</script>

<style lang="scss" scoped>
.radio {
	display: flex;
	align-items: center;
	gap: $indent-xs;
	user-select: none;
	cursor: pointer;
	color: $color-white;

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

	&--disabled {
		cursor: default;
		pointer-events: none;

		.radio__circle {
			border-color: $color-gray-four;
		}
	}

	&__circle {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 1px solid $color-white;
		transition: border-color 0.1s ease-in;
	}

	&__point {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		transition: background-color 0.1s ease-in;
	}
}
</style>
