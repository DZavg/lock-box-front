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
import { IconColor } from '@/shared/model/types/Icon/IconColor'

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
	font-size: 0;
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
