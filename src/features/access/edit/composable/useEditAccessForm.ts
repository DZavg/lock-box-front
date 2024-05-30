import { type Ref, ref } from 'vue'
import type { Access } from '@/shared/model/types/Access/Access'

export default function () {
	const form: Ref<Access> = ref({
		id: '',
		origin: '',
		login: '',
		password: '',
		type: '',
	})

	function fillForm(data: Access) {
		form.value = data
	}

	return { form, fillForm }
}
