<template>
	<RouterLink
		:class="{ ['link-button_background_' + background]: background }"
		:target="target"
		:to="link"
		class="link-button"
	>
		<slot></slot>
	</RouterLink>
</template>

<script lang="ts" setup>
import { ButtonBackground } from '@/shared/model/types/Button/ButtonBackground'
import { type HtmlLinkTarget } from '@/shared/model/types/Link/HtmlLinkTarget'

interface Props {
	link: string | object
	target?: HtmlLinkTarget
	background?: ButtonBackground
}

withDefaults(defineProps<Props>(), {
	link: '',
	target: '_self',
	background: ButtonBackground.Fill,
})
</script>

<style lang="scss" scoped>
.link-button {
	padding: 12px $indent-m;
	color: $color-white;
	border: 1px solid transparent;
	border-radius: $border-radius-s;
	word-break: break-word;
	text-align: center;
	transition:
		background-color 0.2s ease-in,
		border-color 0.2s ease-in;
	user-select: none;

	&_background {
		&_fill {
			background-color: $color-blue-primary;

			&:hover {
				background-color: $color-blue-secondary;
			}

			&:active {
				background-color: $color-blue-third;
			}
		}

		&_border {
			border-color: $color-blue-primary;

			&:hover {
				border-color: $color-blue-secondary;
			}

			&:active {
				border-color: $color-blue-third;
			}
		}
	}
}
</style>
