<template>
	<Teleport to="body">
		<div class="modal" @keydown.esc="$emit('onClose')" @mousedown.self="$emit('onClose')">
			<BaseCard class="modal__content" v-bind="$attrs">
				<CloseButtonIcon class="modal__close-button" @click="$emit('onClose')" />
				<p class="h2 h1-indent">{{ title }}</p>
				<p v-if="text">{{ text }}</p>
				<slot></slot>
			</BaseCard>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
import CloseButtonIcon from '@/shared/ui/Button/CloseButtonIcon.vue'
import useLockScroll from '@/app/composable/useLockScroll'
import BaseCard from '@/shared/ui/Card/BaseCard.vue'

interface Props {
	title: string
	text?: string
}

withDefaults(defineProps<Props>(), {
	title: '',
	text: '',
})

useLockScroll()

defineEmits<(e: 'onClose') => void>()
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	overflow: auto;
	width: 100%;
	height: 100%;
	padding: $indent-xl;
	background: $color-modal-bg;
	overscroll-behavior: contain;
	word-break: break-word;

	@include media-max-width-mobile {
		padding: $indent-xl $indent-s;
	}

	&__close-button {
		position: absolute;
		top: 12px;
		right: 12px;

		@include media-max-width-mobile {
			top: $indent-xs;
			right: $indent-xs;
		}
	}

	&__content {
		position: relative;
		width: 100%;
		max-width: 400px;
		margin: auto;
		color: $color-white;
	}
}
</style>
