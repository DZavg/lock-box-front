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
	(e: 'onSuccess'): void
	(e: 'onClose'): void
}>()

const { execute, isLoading } = useRequest()

const projectStore = useProjectStore()
const { deleteOneById } = projectStore

const deleteProject = () => {
	execute(async () => {
		const response = await deleteOneById(props.project.id)
		emits('onSuccess')
		emits('onClose')
		return response
	})
}
</script>

<style scoped lang="scss"></style>
