import { type Ref, ref } from 'vue'

export default function () {
	const editAccessModalIsOpen: Ref<boolean> = ref(false)

	function openEditAccessModal() {
		editAccessModalIsOpen.value = true
	}

	function closeEditAccessModal() {
		editAccessModalIsOpen.value = false
	}

	return { openEditAccessModal, closeEditAccessModal, editAccessModalIsOpen }
}
