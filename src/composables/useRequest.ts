import { type Ref, ref } from 'vue'
import { toast } from 'vue3-toastify'
import errorsTransform from '@/lib/errorsTransform'

export default function () {
	const data: Ref<any> = ref({})
	const isLoading: Ref<boolean> = ref(false)
	const errors: Ref<any> = ref({})

	const execute = async (callback: Function = () => {}) => {
		if (isLoading.value) {
			return
		}

		try {
			isLoading.value = true
			errors.value = {}
			const response = await callback()
			data.value = response

			if (response.message) {
				toast.success(response.message)
			}
		} catch (e: any) {
			const errorData = e.response.data
			if (errorData.errors) {
				errors.value = errorsTransform(errorData.errors)
			}
			if (errorData.error) {
				toast.error(errorData.error)
			}
		} finally {
			isLoading.value = false
		}
	}

	return { data, isLoading, execute, errors }
}
