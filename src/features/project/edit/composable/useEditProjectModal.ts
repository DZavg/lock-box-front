import { type Ref, ref } from 'vue'

export default function () {
	const editProjectModalIsOpen: Ref<boolean> = ref(false)

	function openEditProjectModal() {
		editProjectModalIsOpen.value = true
	}

	function closeEditProjectModal() {
		editProjectModalIsOpen.value = false
	}

	return { openEditProjectModal, closeEditProjectModal, editProjectModalIsOpen }
}
