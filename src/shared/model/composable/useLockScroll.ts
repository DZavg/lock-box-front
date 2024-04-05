import { onMounted, onUnmounted } from 'vue'

export default function () {
	const lockScroll = () => {
		document.body.classList.add('lock-scroll')
		document.documentElement.classList.add('lock-scroll')
	}

	const unlockScroll = () => {
		document.body.classList.remove('lock-scroll')
		document.documentElement.classList.remove('lock-scroll')
	}

	onMounted(() => {
		lockScroll()
	})

	onUnmounted(() => {
		unlockScroll()
	})
}
