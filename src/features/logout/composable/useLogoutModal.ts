import { type Ref, ref } from 'vue'

export default function () {
	const logoutModalIsOpen: Ref<boolean> = ref(false)

	function openLogoutModal() {
		logoutModalIsOpen.value = true
	}

	function closeLogoutModal() {
		logoutModalIsOpen.value = false
	}

	return { openLogoutModal, closeLogoutModal, logoutModalIsOpen }
}
