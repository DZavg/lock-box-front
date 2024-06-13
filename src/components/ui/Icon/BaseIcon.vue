<template>
  <svg
    :class="{ ['icon-' + size]: !!size, ['icon_color_' + color]: !!color }"
    class="icon"
  >
    <use :href="icon + '#icon'" />
  </svg>
</template>

<script lang="ts" setup>
import { Color } from '@/global/types/ui/color/Color'
import { IconSize } from '@/global/types/ui/icon/IconSize'

interface Props {
	icon: string
	size?: IconSize
	color?: Color
}

withDefaults(defineProps<Props>(), {
	icon: '',
	size: IconSize.M,
	color: Color.White,
})
</script>

<style lang="scss" scoped>
.icon {
	&_color {
		&_white {
			fill: $color-white;
		}

		&_gray-third {
			fill: $color-gray-third;
		}

		&_blue-primary {
			fill: $color-blue-primary;
		}
	}
}
</style>
