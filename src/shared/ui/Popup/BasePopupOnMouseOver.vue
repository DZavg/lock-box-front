<template>
	<div
		v-click-outside="closePopup"
		class="popup-on-mouse-over"
		@mouseleave="mouseLeaveHandler"
		@mouseover="mouseEnterHandler"
	>
		<div ref="popupHead" class="popup-on-mouse-over__head" @click="togglePopup">
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
import { onBeforeUnmount, onMounted, type Ref, ref } from 'vue'
import useScreen from '@/shared/lib/composable/useScreen'
import throttle from '@/shared/lib/throttle'
import { PopupPosition } from '@/shared/model/types/Popup/PopupPosition'

const isActive = ref(false)
const popupHead: Ref<HTMLElement | null> = ref(null)
const popupBody: Ref<HTMLElement | null> = ref(null)
const { isDesktop } = useScreen()

const openPopup = () => {
	isActive.value = true
	sendEmit()
}

const closePopup = () => {
	isActive.value = false
	sendEmit()
}

const togglePopup = () => {
	isActive.value = !isActive.value
	sendEmit()
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

const emits = defineEmits<{ (e: 'onToggle', value: boolean): void }>()

const sendEmit = () => {
	emits('onToggle', isActive.value)
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
	const popupHeadRect = popupHead.value?.getBoundingClientRect() || defaultDOMRect
	const popupBodyRect = popupBody.value?.getBoundingClientRect() || defaultDOMRect
	const windowWidth = document.documentElement.clientWidth

	const popupHeadCorrectRect = {
		right: windowWidth - popupHeadRect.right,
		left: popupHeadRect.left + popupHeadRect.width,
	}

	if (popupHeadCorrectRect.left > popupBodyRect.width) {
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

onBeforeUnmount(() => {
	window.removeEventListener('resize', checkAvailableSideWithThrottle)
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
