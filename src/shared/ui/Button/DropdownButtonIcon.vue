<template>
	<BaseButtonIcon
		:class="{ ['dropdown-button-icon--active']: isActive }"
		:icon="iconArrowSmall"
		:icon-color="iconColor"
		class="dropdown-button-icon"
		size="16"
	/>
</template>

<script lang="ts" setup>
import iconArrowSmall from '@/shared/images/svg/icon-arrow-small.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import { IconColor } from '@/shared/model/types/Icon/IconColor'

interface Props {
	iconColor?: IconColor
	isActive?: boolean
}

withDefaults(defineProps<Props>(), {
	iconColor: IconColor.White,
	isActive: false,
})
</script>

<style lang="scss" scoped>
.dropdown-button-icon {
	&:deep(svg) {
		rotate: 90deg;
		transition: rotate 0.1s ease-in;
	}

	&--active {
		&:deep(svg) {
			rotate: -90deg;
		}
	}
}
</style>
