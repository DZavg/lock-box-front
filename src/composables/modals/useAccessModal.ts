import { type Ref, ref } from 'vue'
import type { Access } from '@/api/access/entity/Access'

interface AccessModalOptions {
	access?: Access
}

export default function () {
	const accessModalIsOpen: Ref<boolean> = ref(false)
	const accessModalOptions: Ref<AccessModalOptions> = ref({})

	function openAccessModal(options?: AccessModalOptions) {
		if (options) {
			setAccessModalOptions(options)
		}

		accessModalIsOpen.value = true
	}

	function closeAccessModal() {
		accessModalIsOpen.value = false
	}

	function setAccessModalOptions(options: AccessModalOptions) {
		accessModalOptions.value = options
	}

	return { openAccessModal, closeAccessModal, accessModalIsOpen, accessModalOptions }
}
