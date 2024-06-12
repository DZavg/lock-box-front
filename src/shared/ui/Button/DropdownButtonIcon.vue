<template>
  <BaseButtonIcon
    :class="{ ['dropdown-button-icon--active']: isActive }"
    :icon="iconArrowSmall"
    :icon-color="iconColor"
    :size="IconSize.S"
    class="dropdown-button-icon"
  />
</template>

<script lang="ts" setup>
import iconArrowSmall from '@/shared/images/svg/icon-arrow-small.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import { Color } from '@/shared/model/types/Color/Color'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	iconColor?: Color
	isActive?: boolean
}

withDefaults(defineProps<Props>(), {
	iconColor: Color.White,
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
