<template>
  <ConfirmActionModal
    title="Вы действительно хотите выйти из аккаунта?"
    button-confirm-text="Выйти"
    :loading="isLoading"
    @on-close="$emit('onClose')"
    @on-confirm="logout"
  />
</template>

<script setup lang="ts">
import ConfirmActionModal from '@/components/ConfirmModals/ConfirmActionModal.vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { RouteName } from '@/router/RouteName'
import useRequest from '@/composables/useRequest'

const { execute, isLoading } = useRequest()
const router = useRouter()
const authStore = useAuthStore()
const { logout: fetchLogout } = authStore

const logout = () => {
	execute(async () => {
		const response = await fetchLogout()
		await router.push(RouteName.Auth)
		return response
	})
}

defineEmits<{
	(e: 'onClose'): void
}>()
</script>

<style scoped lang="scss"></style>
