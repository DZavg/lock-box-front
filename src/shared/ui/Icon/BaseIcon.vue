<template>
	<svg :class="{ ['icon-' + size]: !!size, ['icon_color_' + color]: !!color }" class="icon">
		<use :href="icon + '#icon'" />
	</svg>
</template>

<script lang="ts" setup>
import { Color } from '@/shared/model/types/Color/Color'

interface Props {
	icon: string
	size?: string | number
	color?: Color
}

withDefaults(defineProps<Props>(), {
	icon: '',
	size: 24,
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
