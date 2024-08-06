<template>
  <div class="projects-actions">
    <BaseButton
      class="projects-actions__button"
      @on-click="openProjectModal"
    >
      Добавить проект
    </BaseButton>
    <ProjectsSearch class="projects-actions__search" />
    <CreateProjectModal
      v-if="projectModalIsOpen"
      @on-success="$emit('onSuccess')"
      @on-close="closeProjectModal"
    />
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import ProjectsSearch from '@/components/Projects/ProjectsSearch.vue'
import useModal from '@/composables/useModal'
import CreateProjectModal from '@/components/Projects/Modals/CreateProjectModal.vue'

const {
	openModal: openProjectModal,
	closeModal: closeProjectModal,
	modalIsOpen: projectModalIsOpen,
} = useModal()

defineEmits<{
	(e: 'onSuccess'): void
}>()
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
