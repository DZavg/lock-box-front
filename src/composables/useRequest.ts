import { type Ref, ref } from 'vue'
import { toast } from 'vue3-toastify'

export default function () {
	const data: Ref<any> = ref({})
	const isLoading: Ref<boolean> = ref(false)
	const errors: Ref<Array<string>> = ref([])

	const execute = async (callback: Function = () => {}) => {
		if (isLoading.value) {
			return
		}

		try {
			isLoading.value = true
			const response = await callback()
			const data = response.data
			data.value = data

			if (data.message) {
				toast.success(data.message)
			}
		} catch (e: any) {
			const errorData = e.response.data
			if (errorData.errors) {
				errors.value = errorData.errors
			}
			if (errorData.error) {
				toast.error(errorData.error)
			}
		} finally {
			isLoading.value = false
		}
	}

	return { data, isLoading, execute }
}
