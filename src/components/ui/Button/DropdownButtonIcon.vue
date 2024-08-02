<template>
  <BaseButtonIcon
    :class="{ ['dropdown-button-icon--active']: isActive }"
    :icon="iconArrowSmall"
    :icon-color="iconColor"
    :size="IconSize.S"
    title="Показать/скрыть выпадающее меню"
    class="dropdown-button-icon"
  />
</template>

<script lang="ts" setup>
import iconArrowSmall from '@/assets/images/svg/icon-arrow-small.svg'
import BaseButtonIcon from '@/components/ui/Button/BaseButtonIcon.vue'
import { Color } from '@/global/types/ui/color/Color'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import type { IconColor } from '@/global/types/ui/icon/IconColor'

interface Props {
	iconColor?: IconColor
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
