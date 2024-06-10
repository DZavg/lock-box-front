import { type Ref, ref } from 'vue'

export default function () {
	const projectModalIsOpen: Ref<boolean> = ref(false)

	function openProjectModal() {
		projectModalIsOpen.value = true
	}

	function closeProjectModal() {
		projectModalIsOpen.value = false
	}

	return { openProjectModal, closeProjectModal, projectModalIsOpen }
}
