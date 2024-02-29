<template>
	<RouterLink
		:to="link"
		:target="target"
		class="link"
		:class="{ ['link_color_' + color]: !!color }"
	>
		<slot></slot>
	</RouterLink>
</template>

<script lang="ts" setup>
import { type HtmlLinkTarget } from '@/shared/types/Link/HtmlLinkTarget'
import { LinkColor } from '@/shared/types/Link/LinkColor'

interface Props {
	link: string | object
	target?: HtmlLinkTarget
	color?: LinkColor
}

withDefaults(defineProps<Props>(), {
	link: '',
	target: '_self',
	color: LinkColor.BluePrimary,
})
</script>

<style lang="scss" scoped>
.link {
	cursor: pointer;
	user-select: none;

	&_color {
		&_blue-primary {
			color: $color-blue-primary;
			transition: color 0.15s ease-in;

			&:hover,
			&:active {
				color: $color-blue-secondary;
			}
		}

		&_white {
			color: $color-white;
			transition: opacity 0.15s ease-in;

			&:hover,
			&:active {
				opacity: 0.8;
			}
		}
	}
}
</style>
