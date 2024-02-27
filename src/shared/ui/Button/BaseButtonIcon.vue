<template>
	<button
		class="button-icon"
		type="button"
		:disabled="disabled"
		@click="!disabled && $emit('onClick')"
	>
		<BaseIcon :icon="icon" :size="size" />
	</button>
</template>

<script lang="ts" setup>
import BaseIcon from '@/shared/types/Icon/BaseIcon.vue'

interface Props {
	disabled?: boolean
	icon: string
	size?: number
}

withDefaults(defineProps<Props>(), {
	disabled: false,
	icon: '',
	size: 24,
})

defineEmits<{ (e: 'onClick'): void }>()
</script>

<style lang="scss" scoped>
.button-icon {
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
