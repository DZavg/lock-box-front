<template>
	<button
		:class="{ ['button_view_' + view]: view, ['button--loading']: loading }"
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
import { ButtonView } from '@/shared/model/types/Button/ButtonView'
import iconLoading from '@/shared/images/svg/icon-loading.svg'
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	disabled?: boolean
	type?: HtmlButtonType
	view?: ButtonView
	loading?: boolean
}

withDefaults(defineProps<Props>(), {
	disabled: false,
	type: 'button',
	view: ButtonView.Filled,
	loading: false,
})

defineEmits<(e: 'onClick') => void>()
</script>

<style lang="scss" scoped>
.button {
	@include button;

	&_view {
		&_filled {
			@include button-view-filled;
		}

		&_outlined {
			@include button-view-outlined;
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
