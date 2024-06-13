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
      @on-close="closeProjectModal"
    />
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import SearchInput from '@/components/ui/Input/SearchInput.vue'
import ProjectModal from '@/features/project/modal/ui/ProjectModal.vue'
import useProjectModal from '@/features/project/modal/composable/useProjectModal'

const { openProjectModal, projectModalIsOpen, closeProjectModal } = useProjectModal()
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
