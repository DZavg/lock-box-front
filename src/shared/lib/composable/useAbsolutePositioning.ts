import { onBeforeUnmount, onMounted, type Ref, ref } from 'vue'
import { Position } from '@/shared/model/types/Position/Position'
import throttle from '@/shared/lib/throttle'

export default function (
	parentElement: Ref<HTMLElement | null>,
	element: Ref<HTMLElement | null>,
	defaultPosition: Position,
	positions: Position[] = [Position.Top, Position.Right, Position.Bottom, Position.Left],
) {
	const defaultDOMRect = {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	}
	const position = ref('')

	const checkPosition = () => {
		const elementDOMRect = parentElement.value?.getBoundingClientRect() || defaultDOMRect

		const elementHeight = element.value?.clientHeight ?? 0
		const elementWidth = element.value?.clientWidth ?? 0

		const windowWidth = window.innerWidth
		const windowHeight = window.innerHeight

		const elementRect = {
			top: elementDOMRect.top - elementHeight,
			right: windowWidth - elementDOMRect.right - elementWidth / 2,
			bottom: windowHeight - elementDOMRect.bottom - elementHeight,
			left: elementDOMRect.left - elementWidth / 2,
		}

		if (elementRect.bottom > 0 && positions.includes(Position.Bottom)) {
			position.value = Position.Bottom
			return
		} else if (elementRect.top > 0 && positions.includes(Position.Top)) {
			position.value = Position.Top
			return
		} else if (elementRect.right > 0 && positions.includes(Position.Right)) {
			position.value = Position.Right
			return
		} else if (elementRect.left > 0 && positions.includes(Position.Left)) {
			position.value = Position.Left
			return
		}

		position.value = defaultPosition
	}

	const checkPositionWithThrottle = throttle(checkPosition)

	onMounted(() => {
		checkPosition()
		window.addEventListener('scroll', checkPositionWithThrottle)
		window.addEventListener('resize', checkPositionWithThrottle)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', checkPositionWithThrottle)
		window.removeEventListener('resize', checkPositionWithThrottle)
	})

	return {
		position,
	}
}
