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
import useLockScroll from '@/shared/lib/composable/useLockScroll'
import BaseCard from '@/shared/ui/Card/BaseCard.vue'

useLockScroll()

defineEmits<(e: 'onClose') => void>()
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	display: grid;
	overflow: auto;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	padding: $indent-xl;
	background: $color-modal-bg;
	overscroll-behavior: contain;

	@media screen and (max-width: 768px) {
		padding: $indent-xl $indent-s;
	}

	&__close-button {
		position: absolute;
		top: 12px;
		right: 12px;
	}

	&__content {
		position: relative;
		width: 100%;
		max-width: 400px;
		color: $color-white;
	}
}
</style>
