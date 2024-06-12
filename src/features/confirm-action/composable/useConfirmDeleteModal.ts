import { type Ref, ref } from 'vue'

interface ConfirmDeleteModalOptions {
	title?: string
}

export default function () {
	const confirmDeleteModalIsOpen: Ref<boolean> = ref(false)
	const confirmDeleteModalOptions: Ref<ConfirmDeleteModalOptions> = ref({})

	function openConfirmDeleteModal(options?: ConfirmDeleteModalOptions) {
		if (options) {
			setConfirmDeleteModalOptions(options)
		}

		confirmDeleteModalIsOpen.value = true
	}

	function closeConfirmDeleteModal() {
		confirmDeleteModalIsOpen.value = false
	}

	function setConfirmDeleteModalOptions(options: ConfirmDeleteModalOptions) {
		confirmDeleteModalOptions.value = options
	}

	return {
		openConfirmDeleteModal,
		closeConfirmDeleteModal,
		confirmDeleteModalIsOpen,
		confirmDeleteModalOptions,
	}
}
