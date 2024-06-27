<template>
  <div class="project-table">
    <BaseTableGroup>
      <template #head>
        <tr>
          <th
            v-for="(field, index) in tableFields"
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
            v-for="(field, index) in tableFields"
            :key="index"
          >
            {{ project[field.key] }}
          </td>
          <td>
            <TableActionList
              :external-link="project.domain"
              :link="{ name: RouteName.ProjectsSlug, params: { slug: project.id } }"
              @on-edit="openProjectModal({ project })"
              @on-delete="confirmDelete(project)"
            />
          </td>
        </tr>
      </template>
      <template #cards>
        <TableCardWithActionList
          v-for="project in projects"
          :key="project.id"
          :fields="tableFields"
          :value="project"
          :external-link="project.domain"
          :link="{ name: RouteName.ProjectsSlug, params: { slug: project.id } }"
          @on-edit="openProjectModal({ project })"
          @on-delete="confirmDelete(project)"
        />
      </template>
    </BaseTableGroup>
    <ProjectModal
      v-if="projectModalIsOpen"
      :project="projectModalOptions.project"
      @on-close="closeProjectModal"
    />
    <ConfirmDeleteModal
      v-if="confirmDeleteModalIsOpen"
      :title="selectProject.title"
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
import type { TableField } from '@/global/types/ui/table/Table'
import ProjectModal from '@/components/Projects/ProjectModal.vue'
import useProjectModal from '@/composables/modals/useProjectModal'
import ConfirmDeleteModal from '@/components/ConfirmModals/ConfirmDeleteModal.vue'
import { useProjectStore } from '@/stores/project'
import useRequest from '@/composables/useRequest'
import { ref, type Ref } from 'vue'
import { projectDefaults } from '@/global/defaults/project/Project'
import useModal from '@/composables/useModal'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})

const selectProject: Ref<Project> = ref(projectDefaults)

const { projectModalIsOpen, closeProjectModal, openProjectModal, projectModalOptions } =
	useProjectModal()
const {
	modalIsOpen: confirmDeleteModalIsOpen,
	openModal: openConfirmDeleteModal,
	closeModal: closeConfirmDeleteModal,
} = useModal()
const { execute } = useRequest()

const projectStore = useProjectStore()
const { deleteOneById, getAll } = projectStore

const confirmDelete = (project: Project) => {
	openConfirmDeleteModal()
	selectProject.value = project
}

const deleteProject = async () => {
	await execute(async () => {
		const response = await deleteOneById(selectProject.value.id)
		await getAll()
		closeConfirmDeleteModal()
		return response
	})
}

const tableFields: TableField<keyof Project>[] = [
	{
		label: 'Название проекта',
		key: 'title',
	},
	{
		label: 'Домен',
		key: 'domain',
	},
]
</script>

<style scoped lang="scss">
.project-table {
	td:last-child {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
