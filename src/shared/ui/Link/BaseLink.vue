<template>
	<a
		v-if="isExternalLink"
		:class="{ ['link_color_' + color]: !!color }"
		:href="'//' + link"
		class="link"
		target="_blank"
		v-bind="$attrs"
	>
		<slot></slot>
	</a>
	<RouterLink
		v-else
		:class="{ ['link_color_' + color]: !!color }"
		:target="target"
		:to="link"
		class="link"
		v-bind="$attrs"
	>
		<slot></slot>
	</RouterLink>
</template>

<script lang="ts" setup>
import { type HtmlLinkTarget } from '@/shared/model/types/Link/HtmlLinkTarget'
import { LinkColor } from '@/shared/model/types/Link/LinkColor'
import useLink from '@/shared/model/composable/useLink'

interface Props {
	link: string | object
	target?: HtmlLinkTarget
	color?: LinkColor
}

const props = withDefaults(defineProps<Props>(), {
	link: '',
	target: '_self',
	color: LinkColor.BluePrimary,
})

const isExternalLink = useLink(props.link)
</script>

<style lang="scss" scoped>
.link {
	cursor: pointer;
	user-select: none;
	transition: color 0.15s ease-in;

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
