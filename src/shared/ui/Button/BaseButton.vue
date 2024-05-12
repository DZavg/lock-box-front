<template>
	<button
		:class="{ ['button_background_' + background]: background, ['button--loading']: loading }"
		:disabled="disabled"
		:type="type"
		class="button button_p"
		@click="!loading && !disabled && $emit('onClick')"
	>
		<span v-show="loading" class="button__loader">
			<BaseIcon :icon="iconLoading" :ize="IconSize.S" />
			<span>Загрузка...</span>
		</span>
		<span class="button__text"><slot></slot></span>
	</button>
</template>

<script lang="ts" setup>
import { type HtmlButtonType } from '@/shared/model/types/Button/HtmlButtonType'
import { ButtonBackground } from '@/shared/model/types/Button/ButtonBackground'
import iconLoading from '@/shared/images/svg/icon-loading.svg'
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	disabled?: boolean
	type?: HtmlButtonType
	background?: ButtonBackground
	loading?: boolean
}

withDefaults(defineProps<Props>(), {
	disabled: false,
	type: 'button',
	background: ButtonBackground.Fill,
	loading: false,
})

defineEmits<(e: 'onClick') => void>()
</script>

<style lang="scss" scoped>
.button {
	padding: 12px $indent-m;
	border: 1px solid transparent;
	border-radius: $border-radius-s;
	color: $color-white;
	text-align: center;
	transition:
		background-color 0.2s ease-in,
		border-color 0.2s ease-in;
	user-select: none;
	white-space: nowrap;
	word-break: break-word;

	&_background {
		&_fill {
			background-color: $color-blue-primary;

			&:hover {
				background-color: $color-blue-secondary;
			}

			&:active {
				background-color: $color-blue-third;
			}

			&:disabled {
				background-color: $color-gray-four;
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

			&:disabled {
				border-color: $color-gray-four;
			}
		}
	}

	&:disabled {
		cursor: default;
	}

	&--loading {
		pointer-events: none;

		.button__text {
			display: block;
			height: 0;
			visibility: hidden;
		}
	}

	&__loader {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: $indent-xs;
		pointer-events: none;

		svg {
			animation: rotate 4s linear infinite;
			fill: $color-white;
		}
	}
}
</style>
