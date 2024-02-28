<template>
	<button
		class="button-icon"
		type="button"
		:disabled="disabled"
		@click="!disabled && $emit('onClick')"
	>
		<BaseIcon :icon="icon" :size="size" :color="iconColor" />
	</button>
</template>

<script lang="ts" setup>
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import { IconColor } from '@/shared/types/Icon/IconColor'

interface Props {
	disabled?: boolean
	icon: string
	size?: string | number
	iconColor?: IconColor
}

withDefaults(defineProps<Props>(), {
	disabled: false,
	icon: '',
	size: 24,
	iconColor: IconColor.White,
})

defineEmits<{ (e: 'onClick'): void }>()
</script>

<style lang="scss" scoped>
.button-icon {
	line-height: 0;

	svg {
		transition: opacity 0.15s ease-in;
	}

	&:hover {
		svg {
			opacity: 0.7;
		}
	}
}
</style>
