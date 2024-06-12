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
              @on-delete="openConfirmDeleteModal({ title: project.title })"
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
          @on-delete="openConfirmDeleteModal({ title: project.title })"
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
      :title="confirmDeleteModalOptions.title"
      button-confirm-text="Удалить проект"
      @on-close="closeConfirmDeleteModal"
    />
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '@/app/router/RouteName'
import TableActionList from '@/features/table/action-list/ui/TableActionList.vue'
import BaseTableGroup from '@/shared/ui/Table/BaseTableGroup.vue'
import type { Project } from '@/shared/model/types/Project/Project'
import TableCardWithActionList from '@/features/table/action-list/ui/TableCardWithActionList.vue'
import type { TableField } from '@/shared/model/types/Table/Table'
import ProjectModal from '@/features/project/modal/ui/ProjectModal.vue'
import useProjectModal from '@/features/project/modal/composable/useProjectModal'
import useConfirmDeleteModal from '@/features/confirm-action/composable/useConfirmDeleteModal'
import ConfirmDeleteModal from '@/features/confirm-action/ui/ConfirmDeleteModal.vue'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})

const { projectModalIsOpen, closeProjectModal, openProjectModal, projectModalOptions } =
	useProjectModal()
const {
	openConfirmDeleteModal,
	closeConfirmDeleteModal,
	confirmDeleteModalIsOpen,
	confirmDeleteModalOptions,
} = useConfirmDeleteModal()

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
