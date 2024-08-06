<template>
  <AccessModal
    :loading="isLoading"
    :errors="errors"
    title="Добавить доступ"
    @on-close="$emit('onClose')"
    @on-submit="createAccess"
  />
</template>

<script setup lang="ts">
import AccessModal from '@/components/Accesses/Modals/AccessModal.vue'
import type { AccessDto } from '@/api/access/dto/access.dto'
import useRequest from '@/composables/useRequest'
import { useProjectStore } from '@/stores/project'

interface Props {
	projectId: string
}

const props = withDefaults(defineProps<Props>(), {
	projectId: '',
})

const emits = defineEmits<{
	(e: 'onClose'): void
	(e: 'onSuccess'): void
}>()

const { execute, isLoading, errors } = useRequest()

const projectStore = useProjectStore()
const { createAccessById } = projectStore

const createAccess = async (access: AccessDto) => {
	await execute(async () => {
		const response = await createAccessById(props.projectId, access)
		emits('onSuccess')
		emits('onClose')
		return response
	})
}
</script>

<style scoped lang="scss"></style>
