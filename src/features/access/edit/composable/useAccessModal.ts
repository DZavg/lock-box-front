import { type Ref, ref } from 'vue'

export default function () {
	const accessModalIsOpen: Ref<boolean> = ref(false)

	function openAccessModal() {
		accessModalIsOpen.value = true
	}

	function closeAccessModal() {
		accessModalIsOpen.value = false
	}

	return { openAccessModal, closeAccessModal, accessModalIsOpen }
}
