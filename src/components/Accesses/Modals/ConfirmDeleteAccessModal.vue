<template>
  <ConfirmDeleteModal
    button-confirm-text="Удалить доступ"
    :title="access.type.title"
    :loading="isLoading"
    @on-close="$emit('onClose')"
    @on-confirm="deleteAccess"
  />
</template>

<script setup lang="ts">
import ConfirmDeleteModal from '@/components/ConfirmModals/ConfirmDeleteModal.vue'
import useRequest from '@/composables/useRequest'
import type { Access } from '@/api/access/entity/Access'
import { accessDefaults } from '@/global/defaults/access/AccessDefaults'
import { useAccessStore } from '@/stores/access'

interface Props {
	access: Access
}

const props = withDefaults(defineProps<Props>(), {
	access: () => ({ ...accessDefaults }),
})

const emits = defineEmits<{
	(e: 'onSuccess'): void
	(e: 'onClose'): void
}>()

const { execute, isLoading } = useRequest()

const accessStore = useAccessStore()
const { deleteOneById } = accessStore

const deleteAccess = () => {
	execute(async () => {
		const response = await deleteOneById(props.access.id)
		emits('onSuccess')
		emits('onClose')
		return response
	})
}
</script>

<style scoped lang="scss"></style>
