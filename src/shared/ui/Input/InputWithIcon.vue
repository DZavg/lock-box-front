<template>
	<BaseInput class="input-with-icon" v-bind="props">
		<div class="input-with-icon__icon">
			<slot></slot>
		</div>
	</BaseInput>
</template>

<script lang="ts" setup>
import { type InputTypeHTMLAttribute } from 'vue'
import BaseError from '@/shared/ui/Error/BaseError.vue'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'

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

const props = withDefaults(defineProps<Props>(), {})
</script>

<style lang="scss" scoped>
.input-with-icon {
	&:deep(.input__wrapper) {
		position: relative;

		input {
			padding-right: 44px;
		}
	}

	&__icon {
		position: absolute;
		right: $indent-s;
		top: 50%;
		transform: translateY(-50%);
		font-size: 0;
		line-height: 0;
	}
}
</style>
