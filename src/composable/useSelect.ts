import { onBeforeUnmount, onMounted, type Ref, ref } from 'vue'
import { Position } from '@/shared/model/types/Position/Position'
import BaseOptionList from '@/components/ui/Option/BaseOptionList.vue'
import throttle from '@/lib/throttle'

export default function () {
	const selectField: Ref<InstanceType<typeof HTMLElement> | null> = ref(null)
	const optionList: Ref<InstanceType<typeof BaseOptionList> | null> = ref(null)
	const position: Ref<Position> = ref(Position.Bottom)

	const checkPosition = () => {
		if (!selectField.value || !optionList.value?.optionList) return

		const selectFieldDOMRect = selectField.value.getBoundingClientRect()
		const optionListHeight = optionList.value?.optionList?.clientHeight || 0
		const windowHeight = document.documentElement.clientHeight
		const selectBottomRect = windowHeight - selectFieldDOMRect.bottom

		position.value = Position.Bottom

		if (selectBottomRect < optionListHeight && selectFieldDOMRect.top > optionListHeight) {
			position.value = Position.Top
		}
	}

	const checkPositionWithThrottle = throttle(checkPosition, 200)

	onMounted(() => {
		checkPosition()
		window.addEventListener('scroll', checkPositionWithThrottle)
		window.addEventListener('resize', checkPositionWithThrottle)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', checkPositionWithThrottle)
		window.removeEventListener('resize', checkPositionWithThrottle)
	})

	return { position, selectField, optionList, checkPosition }
}
