import { type Ref, ref } from 'vue'
import type { Project } from '@/global/types/api/project/Project'

interface ProjectModalOptions {
	project?: Project
}

export default function () {
	const projectModalIsOpen: Ref<boolean> = ref(false)
	const projectModalOptions: Ref<ProjectModalOptions> = ref({})

	function openProjectModal(options?: ProjectModalOptions) {
		if (options) {
			setProjectModalOptions(options)
		}

		projectModalIsOpen.value = true
	}

	function closeProjectModal() {
		projectModalIsOpen.value = false
	}

	function setProjectModalOptions(options: ProjectModalOptions) {
		projectModalOptions.value = options
	}

	return { openProjectModal, closeProjectModal, projectModalIsOpen, projectModalOptions }
}
