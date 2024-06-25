<template>
  <ConfirmActionModal
    title="Вы действительно хотите выйти из аккаунта?"
    button-confirm-text="Выйти"
    @on-close="$emit('onClose')"
    @on-confirm="logout"
  />
</template>

<script setup lang="ts">
import ConfirmActionModal from '@/components/ConfirmModals/ConfirmActionModal.vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { RouteName } from '@/router/RouteName'

const router = useRouter()
const authStore = useAuthStore()
const { logout: fetchLogout } = authStore

const logout = async () => {
	await fetchLogout()
	await router.push(RouteName.Auth)
}

defineEmits<{
	(e: 'onClose'): void
}>()
</script>

<style scoped lang="scss"></style>
