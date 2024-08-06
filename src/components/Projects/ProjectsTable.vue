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
      :project="selectProject"
      @on-close="closeProjectModal"
    />
    <ConfirmDeleteModal
      v-if="confirmDeleteModalIsOpen"
      :title="selectProject?.title"
      :loading="isLoading"
      button-confirm-text="Удалить проект"
      @on-close="closeConfirmDeleteModal"
      @on-confirm="deleteProject"
    />
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '@/router/RouteName'
import TableActionList from '@/components/ui/Table/TableActionList.vue'
import BaseTableGroup from '@/components/ui/Table/BaseTableGroup.vue'
import type { Project } from '@/api/project/entity/Project'
import TableCardWithActionList from '@/components/ui/Table/TableCardWithActionList.vue'
import ConfirmDeleteModal from '@/components/ConfirmModals/ConfirmDeleteModal.vue'
import { useProjectStore } from '@/stores/project'
import useRequest from '@/composables/useRequest'
import { ref, type Ref } from 'vue'
import useModal from '@/composables/useModal'
import { projectDefaults } from '@/global/defaults/project/Project'
import { projectsTableFieldsData } from '@/global/data/project/ProjectsTableData'
import UpdateProjectModal from '@/components/Projects/Modals/UpdateProjectModal.vue'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})

const selectProject: Ref<Project> = ref(projectDefaults)

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
const { execute, isLoading } = useRequest()

const projectStore = useProjectStore()
const { deleteOneById, getAll } = projectStore

const confirmAction = (project: Project, callback: Function = () => {}) => {
	callback()
	selectProject.value = project
}

const deleteProject = async () => {
	await execute(async () => {
		const response = await deleteOneById(selectProject.value?.id)
		await getAll()
		closeConfirmDeleteModal()
		return response
	})
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
