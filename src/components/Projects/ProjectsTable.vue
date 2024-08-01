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
    <ProjectModal
      v-if="projectModalIsOpen"
      :project="selectProject"
      :loading="isLoading"
      @on-close="closeProjectModal"
      @on-submit="updateProject"
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
import ProjectModal from '@/components/Projects/ProjectModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmModals/ConfirmDeleteModal.vue'
import { useProjectStore } from '@/stores/project'
import useRequest from '@/composables/useRequest'
import { ref, type Ref } from 'vue'
import useModal from '@/composables/useModal'
import type { ProjectDto } from '@/api/project/dto/project.dto'
import deleteDuplicateFields from '@/lib/deleteDuplicateFields'
import { projectDefaults } from '@/global/defaults/project/Project'
import { projectsTableFieldsData } from '@/global/data/project/ProjectsTableData'

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
const { deleteOneById, getAll, updateOneById } = projectStore

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

const updateProject = async (form: ProjectDto) => {
	await execute(async () => {
		const response = await updateOneById(
			selectProject.value?.id,
			deleteDuplicateFields(form, selectProject.value),
		)
		await getAll()
		closeProjectModal()
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
