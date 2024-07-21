<template>
  <div class="projects-actions">
    <BaseButton
      class="projects-actions__button"
      @on-click="openProjectModal"
    >
      Добавить проект
    </BaseButton>
    <SearchInput class="projects-actions__search" />
    <ProjectModal
      v-if="projectModalIsOpen"
      title="Добавить проект"
      button-text="Добавить"
      :loading="isLoading"
      :errors="errors"
      @on-close="closeProjectModal"
      @on-submit="createProject"
    />
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import SearchInput from '@/components/ui/Input/SearchInput.vue'
import ProjectModal from '@/components/Projects/ProjectModal.vue'
import useProjectModal from '@/composables/modals/useProjectModal'
import { useProjectStore } from '@/stores/project'
import useRequest from '@/composables/useRequest'
import type { ProjectDto } from '@/api/project/dto/project.dto'

const { openProjectModal, projectModalIsOpen, closeProjectModal } = useProjectModal()
const { execute, isLoading, errors } = useRequest()

const projectStore = useProjectStore()
const { create, getAll } = projectStore

const createProject = (project: ProjectDto) => {
	execute(async () => {
		const response = await create(project)
		await getAll()
		closeProjectModal()
		return response
	})
}
</script>

<style lang="scss" scoped>
.projects-actions {
	display: flex;
	align-items: flex-start;
	gap: $indent-m;

	@media screen and (max-width: 768px) {
		width: 100%;
		gap: $indent-s;
	}

	@media screen and (max-width: 480px) {
		flex-direction: column;
	}

	&__button {
		@media screen and (max-width: 480px) {
			width: 100%;
		}
	}

	&__search {
		min-width: 297px;

		@media screen and (max-width: 768px) {
			min-width: initial;
		}

		@media screen and (max-width: 480px) {
			width: 100%;
		}
	}
}
</style>
