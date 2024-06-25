import { type Ref, ref } from 'vue'

export default function () {
	const modalIsOpen: Ref<boolean> = ref(false)

	function openModal() {
		modalIsOpen.value = true
	}

	function closeModal() {
		modalIsOpen.value = false
	}

	return { openModal, closeModal, modalIsOpen }
}
