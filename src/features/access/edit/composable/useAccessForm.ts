import { type Ref, ref } from 'vue'
import type { Access } from '@/shared/model/types/Access/Access'

export default function (data: Access) {
	const form: Ref<Access> = ref(
		data || {
			id: '',
			origin: '',
			login: '',
			password: '',
			type: '',
		},
	)

	return { form }
}
