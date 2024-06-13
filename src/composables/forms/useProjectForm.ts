import { type Ref, ref } from 'vue'
import type { Project } from '@/global/types/api/project/Project'

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
