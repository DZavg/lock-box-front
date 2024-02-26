<template>
	<button :type="type" :disabled="disabled" class="button" @click="!disabled && $emit('onClick')">
		<slot></slot>
	</button>
</template>

<script lang="ts" setup>
import { type HtmlButtonType } from '@/shared/types/Button/HtmlButtonType'

interface Props {
	disabled?: boolean
	type?: HtmlButtonType
}

withDefaults(defineProps<Props>(), {
	disabled: false,
	type: 'button',
})

defineEmits<{ (e: 'onClick'): void }>()
</script>

<style lang="scss" scoped></style>
