import { type Ref, ref } from 'vue'
import type { Project } from '@/api/project/entity/Project'

export default function (data?: Project) {
	const form: Ref<Project> = ref(
		data || {
			id: '',
			title: '',
			domain: '',
		},
	)

	return { form }
}
