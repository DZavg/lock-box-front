<template>
	<ButtonLoading v-if="loading" :background="background" />
	<BaseButton
		ref="buttonElement"
		v-else
		:background="background"
		:type="type"
		:disabled="disabled"
		@onClick="$emit('onClick')"
		><slot></slot
	></BaseButton>
</template>

<script lang="ts" setup>
import { type HtmlButtonType } from '@/shared/types/Button/HtmlButtonType'
import { ButtonBackground } from '@/shared/types/Button/ButtonBackground'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import ButtonLoading from '@/shared/ui/Button/ButtonLoading.vue'

interface Props {
	disabled?: boolean
	type?: HtmlButtonType
	background?: ButtonBackground
	loading?: boolean
}

withDefaults(defineProps<Props>(), {
	disabled: false,
	type: 'button',
	background: ButtonBackground.Fill,
	loading: false,
})

defineEmits<{ (e: 'onClick'): void }>()
</script>

<style lang="scss" scoped></style>
