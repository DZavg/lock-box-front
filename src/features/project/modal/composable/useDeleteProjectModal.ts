import { type Ref, ref } from 'vue'

interface DeleteProjectModalOptions {
	projectTitle?: string
}

export default function () {
	const deleteProjectModalIsOpen: Ref<boolean> = ref(false)
	const deleteProjectModalOptions: Ref<DeleteProjectModalOptions> = ref({})

	function openDeleteProjectModal(options?: DeleteProjectModalOptions) {
		if (options) {
			setDeleteProjectModalOptions(options)
		}

		deleteProjectModalIsOpen.value = true
	}

	function closeDeleteProjectModal() {
		deleteProjectModalIsOpen.value = false
	}

	function setDeleteProjectModalOptions(options: DeleteProjectModalOptions) {
		deleteProjectModalOptions.value = options
	}

	return {
		openDeleteProjectModal,
		closeDeleteProjectModal,
		deleteProjectModalIsOpen,
		deleteProjectModalOptions,
	}
}
