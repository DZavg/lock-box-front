import { type Ref, ref } from 'vue'

export default function () {
	const confirmModalIsOpen: Ref<boolean> = ref(false)

	function openConfirmActionModal() {
		confirmModalIsOpen.value = true
	}

	function closeConfirmActionModal() {
		confirmModalIsOpen.value = false
	}

	return { openConfirmActionModal, closeConfirmActionModal, confirmModalIsOpen }
}
