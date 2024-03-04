<template>
	<svg class="icon" :class="{ ['icon-' + size]: !!size, ['icon_color_' + color]: !!color }">
		<use :href="icon + '#icon'" />
	</svg>
</template>

<script lang="ts" setup>
import { IconColor } from '@/shared/types/Icon/IconColor'

interface Props {
	icon: string
	size?: string | number
	color?: IconColor
}

withDefaults(defineProps<Props>(), {
	icon: '',
	size: 24,
	color: IconColor.White,
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
