<template>
	<BaseButtonIcon
		class="dropdown-button-icon"
		:icon="iconArrowSmall"
		size="16"
		:icon-color="iconColor"
	/>
</template>

<script lang="ts" setup>
import iconArrowSmall from '@/shared/images/svg/icon-arrow-small.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import { IconColor } from '@/shared/types/Icon/IconColor'

interface Props {
	iconColor?: IconColor
}

withDefaults(defineProps<Props>(), {
	iconColor: IconColor.White,
})
</script>

<style lang="scss" scoped>
.dropdown-button-icon {
	&:deep(svg) {
		rotate: 90deg;
	}
}
</style>
