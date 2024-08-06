<template>
  <ProjectModal
    :loading="isLoading"
    title="Добавить проект"
    button-text="Добавить"
    :errors="errors"
    @on-submit="createProject"
    @on-close="$emit('onClose')"
  />
</template>

<script setup lang="ts">
import ProjectModal from '@/components/Projects/Modals/ProjectModal.vue'
import useRequest from '@/composables/useRequest'
import type { ProjectDto } from '@/api/project/dto/project.dto'
import { useProjectStore } from '@/stores/project'

const emits = defineEmits<{
	(e: 'onSuccess'): void
	(e: 'onClose'): void
}>()

const { execute, isLoading, errors } = useRequest()

const projectStore = useProjectStore()
const { create } = projectStore

const createProject = (project: ProjectDto) => {
	execute(async () => {
		const response = await create(project)
		emits('onSuccess')
		emits('onClose')
		return response
	})
}
</script>

<style scoped lang="scss"></style>
