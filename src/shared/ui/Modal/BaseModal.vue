<template>
	<Teleport to="body">
		<div class="modal" @keydown.esc="$emit('onClose')" @mousedown.self="$emit('onClose')">
			<BaseCard class="modal__content" v-bind="$attrs">
				<CloseButtonIcon class="modal__close-button" @click="$emit('onClose')" />
				<slot></slot>
			</BaseCard>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
import CloseButtonIcon from '@/shared/ui/Button/CloseButtonIcon.vue'
import useLockScroll from '@/app/composable/useLockScroll'
import BaseCard from '@/shared/ui/Card/BaseCard.vue'

useLockScroll()

defineEmits<{
	(e: 'onClose'): void
}>()
</script>

<style lang="scss" scoped>
.modal {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	padding: $indent-xl;
	z-index: 999;
	overflow: auto;
	overscroll-behavior: contain;
	background: $color-modal-bg;

	@media screen and (max-width: 768px) {
		padding: 0;
	}

	&__close-button {
		position: absolute;
		top: 12px;
		right: 12px;
	}

	&__content {
		position: relative;
		max-width: 400px;
		width: 100%;
		color: $color-white;

		@media screen and (max-width: 768px) {
			max-width: none;
			min-height: 100vh;
			border-radius: 0;
		}
	}
}
</style>
