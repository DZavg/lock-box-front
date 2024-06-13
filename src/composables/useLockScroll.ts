import { onMounted, onUnmounted } from 'vue'

export default function () {
	const lockClass = 'lock-scroll'

	const lockScroll = () => {
		document.body.classList.add(lockClass)
		document.documentElement.classList.add(lockClass)
	}

	const unlockScroll = () => {
		document.body.classList.remove(lockClass)
		document.documentElement.classList.remove(lockClass)
	}

	onMounted(() => {
		lockScroll()
	})

	onUnmounted(() => {
		unlockScroll()
	})
}
