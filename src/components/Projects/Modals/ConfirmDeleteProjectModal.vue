<template>
  <ConfirmDeleteModal
    button-confirm-text="Удалить проект"
    :title="project.title"
    :loading="isLoading"
    @on-close="$emit('onClose')"
    @on-confirm="deleteProject"
  />
</template>

<script setup lang="ts">
import ConfirmDeleteModal from '@/components/ConfirmModals/ConfirmDeleteModal.vue'
import useRequest from '@/composables/useRequest'
import { useProjectStore } from '@/stores/project'
import type { Project } from '@/api/project/entity/Project'
import { projectDefaults } from '@/global/defaults/project/Project'

interface Props {
	project: Project
}

const props = withDefaults(defineProps<Props>(), {
	project: () => ({ ...projectDefaults }),
})

const emits = defineEmits<{
	(e: 'onClose'): void
}>()

const { execute, isLoading } = useRequest()

const projectStore = useProjectStore()
const { getAll, deleteOneById } = projectStore

const deleteProject = async () => {
	await execute(async () => {
		const response = await deleteOneById(props.project.id)
		await getAll()
		emits('onClose')
		return response
	})
}
</script>

<style scoped lang="scss"></style>
