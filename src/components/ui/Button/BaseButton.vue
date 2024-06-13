<template>
  <button
    :class="{ ['button_view_' + view]: view, ['button--loading']: loading }"
    :disabled="disabled"
    :type="type"
    class="button button_p"
    @click="!loading && !disabled && $emit('onClick')"
  >
    <BaseButtonLoader v-show="loading" />
    <span class="button__text"><slot /></span>
  </button>
</template>

<script lang="ts" setup>
import { type HtmlButtonType } from '@/model/types/Button/HtmlButtonType'
import { ButtonView } from '@/model/types/Button/ButtonView'
import BaseButtonLoader from '@/components/ui/Button/BaseButtonLoader.vue'

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
}
</style>
