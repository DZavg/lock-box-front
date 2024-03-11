<template>
	<Teleport to="body">
		<div class="modal" @keydown.esc="$emit('onClose')" @mousedown.self="$emit('onClose')">
			<div class="modal__content">
				<CloseButtonIcon class="modal__close-button" @click="$emit('onClose')" />
				<slot></slot>
			</div>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
import CloseButtonIcon from '@/shared/ui/Button/CloseButtonIcon.vue'
import useLockScroll from '@/app/composable/useLockScroll'

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
		max-width: 430px;
		width: 100%;
		padding: $indent-xl;
		background-color: $color-dark-primary;
		color: $color-white;
		border-radius: $border-radius-m;

		@media screen and (max-width: 768px) {
			max-width: none;
			min-height: 100vh;
		}
	}
}
</style>
