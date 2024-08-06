<template>
  <ProjectModal
    :project="project"
    :loading="isLoading"
    :errors="errors"
    @on-submit="updateProject"
    @on-close="$emit('onClose')"
  />
</template>

<script setup lang="ts">
import ProjectModal from '@/components/Projects/Modals/ProjectModal.vue'
import useRequest from '@/composables/useRequest'
import type { ProjectDto } from '@/api/project/dto/project.dto'
import deleteDuplicateFields from '@/utils/deleteDuplicateFields'
import { useProjectStore } from '@/stores/project'
import type { Project } from '@/api/project/entity/Project'
import { projectDefaults } from '@/global/defaults/project/Project'

interface Props {
	project?: Project
}

const props = withDefaults(defineProps<Props>(), {
	project: () => ({ ...projectDefaults }),
})

const emits = defineEmits<{
	(e: 'onSuccess'): void
	(e: 'onClose'): void
}>()

const { execute, isLoading, errors } = useRequest()

const projectStore = useProjectStore()
const { updateOneById } = projectStore

const updateProject = (form: ProjectDto) => {
	execute(async () => {
		const response = await updateOneById(
			props.project?.id,
			deleteDuplicateFields(form, props.project),
		)
		emits('onSuccess')
		emits('onClose')
		return response
	})
}
</script>

<style scoped lang="scss"></style>
