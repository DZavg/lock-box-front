import { type Ref, ref } from 'vue'
import type { Project } from '@/shared/model/types/Project/Project'

export default function () {
	const form: Ref<Project> = ref({
		id: '',
		title: '',
		domain: '',
	})

	function fillForm(data: Project) {
		form.value = data
	}

	return { form, fillForm }
}
