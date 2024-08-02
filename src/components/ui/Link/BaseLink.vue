<template>
  <RouterLink
    :class="{ ['link_color_' + color]: !!color }"
    :target="target"
    :to="link"
    class="link"
    v-bind="$attrs"
  >
    <slot />
  </RouterLink>
</template>

<script lang="ts" setup>
import { type HtmlLinkTarget } from '@/global/types/ui/link/HtmlLinkTarget'
import { Color } from '@/global/types/ui/color/Color'
import type { LinkColor } from '@/global/types/ui/link/LinkColor'

interface Props {
	link: string | object
	target?: HtmlLinkTarget
	color?: LinkColor
}

withDefaults(defineProps<Props>(), {
	link: '',
	target: '_self',
	color: Color.BluePrimary,
})
</script>

<style lang="scss" scoped>
.link {
	cursor: pointer;
	transition: color 0.15s ease-in;
	user-select: none;

	&_color {
		&_blue-primary {
			color: $color-blue-primary;

			&:hover,
			&:active {
				color: $color-blue-secondary;
			}
		}

		&_white {
			color: $color-white;

			&:hover,
			&:active {
				color: rgba($color-white, 0.8);
			}
		}

		&_gray-third {
			color: $color-gray-third;

			&:hover {
				color: $color-blue-primary;
			}

			&:active {
				color: $color-blue-third;
			}
		}
	}
}
</style>
