<template>
	<div
		v-click-outside="closePopup"
		class="popup-on-mouse-over"
		@mouseleave="mouseLeaveHandler"
		@mouseover="mouseEnterHandler"
	>
		<div class="popup-on-mouse-over__head" @click="togglePopup">
			<slot name="head"></slot>
		</div>
		<div
			ref="popupBody"
			:class="{
				['popup-on-mouse-over__body--visible']: isActive,
				['popup-on-mouse-over__body_side_' + side]: !!side,
			}"
			class="popup-on-mouse-over__body"
		>
			<slot name="body"></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, type Ref, ref } from 'vue'
import useScreen from '@/shared/lib/composable/useScreen'
import throttle from '@/shared/lib/throttle'
import { PopupPosition } from '@/shared/model/types/Popup/PopupPosition'

const isActive = ref(false)
const popupBody: Ref<HTMLElement | null> = ref(null)
const { isDesktop } = useScreen()

const openPopup = () => {
	isActive.value = true
}

const closePopup = () => {
	isActive.value = false
}

const togglePopup = () => {
	isActive.value = !isActive.value
}

const mouseEnterHandler = () => {
	if (isDesktop.value) {
		openPopup()
	}
}

const mouseLeaveHandler = () => {
	if (isDesktop.value) {
		closePopup()
	}
}

const defaultDOMRect = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	width: 0,
}

const side: Ref<PopupPosition> = ref(PopupPosition.Left)

const checkAvailableSide = () => {
	const elementDOMRect = popupBody.value?.getBoundingClientRect() || defaultDOMRect
	const windowWidth = window.innerWidth

	const elementRect = {
		right: windowWidth - elementDOMRect.right,
		left: elementDOMRect.left,
	}

	if (elementRect.right > 0) {
		side.value = PopupPosition.Right
		return
	}

	side.value = PopupPosition.Left
}

const checkAvailableSideWithThrottle = throttle(checkAvailableSide)

onMounted(() => {
	checkAvailableSide()
	window.addEventListener('resize', checkAvailableSideWithThrottle)
})
</script>

<style lang="scss" scoped>
.popup-on-mouse-over {
	position: relative;
	cursor: pointer;

	&__body {
		position: absolute;
		z-index: 99;
		top: 100%;
		width: 100%;
		visibility: hidden;

		&_side {
			&_right {
				right: 0;
			}

			&_left {
				left: 0;
			}
		}

		&--visible {
			visibility: visible;
		}
	}
}
</style>
