<template>
  <div class="project-table">
    <BaseTableGroup>
      <template #head>
        <tr>
          <th
            v-for="(field, index) in projectsTableFieldsData"
            :key="index"
          >
            {{ field.label }}
          </th>
          <th />
        </tr>
      </template>
      <template #body>
        <tr
          v-for="project in projects"
          :key="project.id"
        >
          <td
            v-for="(field, index) in projectsTableFieldsData"
            :key="index"
          >
            {{ project[field.key] }}
          </td>
          <td>
            <TableActionList
              :external-link="project.domain"
              :link="{ name: RouteName.ProjectsSlug, params: { slug: project.id } }"
              @on-edit="confirmAction(project, openProjectModal)"
              @on-delete="confirmAction(project, openConfirmDeleteModal)"
            />
          </td>
        </tr>
      </template>
      <template #cards>
        <TableCardWithActionList
          v-for="project in projects"
          :key="project.id"
          :fields="projectsTableFieldsData"
          :value="project"
          :external-link="project.domain"
          :link="{ name: RouteName.ProjectsSlug, params: { slug: project.id } }"
          @on-edit="confirmAction(project, openProjectModal)"
          @on-delete="confirmAction(project, openConfirmDeleteModal)"
        />
      </template>
    </BaseTableGroup>
    <UpdateProjectModal
      v-if="projectModalIsOpen"
      :project="selectedProject"
      @on-success="$emit('onSuccess')"
      @on-close="closeProjectModal"
    />
    <ConfirmDeleteProjectModal
      v-if="confirmDeleteModalIsOpen"
      :project="selectedProject"
      @on-success="$emit('onSuccess')"
      @on-close="closeConfirmDeleteModal"
    />
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '@/router/RouteName'
import TableActionList from '@/components/ui/Table/TableActionList.vue'
import BaseTableGroup from '@/components/ui/Table/BaseTableGroup.vue'
import type { Project } from '@/api/project/entity/Project'
import TableCardWithActionList from '@/components/ui/Table/TableCardWithActionList.vue'
import { ref, type Ref } from 'vue'
import useModal from '@/composables/useModal'
import { projectDefaults } from '@/global/defaults/project/ProjectDefaults'
import { projectsTableFieldsData } from '@/global/data/project/ProjectsTableData'
import UpdateProjectModal from '@/components/Projects/Modals/UpdateProjectModal.vue'
import ConfirmDeleteProjectModal from '@/components/Projects/Modals/ConfirmDeleteProjectModal.vue'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})

const selectedProject: Ref<Project> = ref(projectDefaults)

const {
	openModal: openProjectModal,
	closeModal: closeProjectModal,
	modalIsOpen: projectModalIsOpen,
} = useModal()
const {
	modalIsOpen: confirmDeleteModalIsOpen,
	openModal: openConfirmDeleteModal,
	closeModal: closeConfirmDeleteModal,
} = useModal()

defineEmits<{
	(e: 'onSuccess'): void
}>()

const confirmAction = (project: Project, callback: Function = () => {}) => {
	callback()
	selectedProject.value = project
}
</script>

<style scoped lang="scss">
.project-table {
	td:last-child {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
