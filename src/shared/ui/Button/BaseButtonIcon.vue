<template>
	<button
		:disabled="disabled"
		class="button-icon"
		type="button"
		@click="!disabled && $emit('onClick')"
	>
		<BaseIcon :color="iconColor" :icon="icon" :size="size" />
	</button>
</template>

<script lang="ts" setup>
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import { Color } from '@/shared/model/types/Color/Color'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	disabled?: boolean
	icon: string
	size?: IconSize
	iconColor?: Color
}

withDefaults(defineProps<Props>(), {
	disabled: false,
	icon: '',
	size: IconSize.M,
	iconColor: Color.White,
})

defineEmits<{ (e: 'onClick'): void }>()
</script>

<style lang="scss" scoped>
.button-icon {
	@include button-icon;
}
</style>
