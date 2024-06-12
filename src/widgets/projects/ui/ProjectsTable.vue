<template>
	<div class="project-table">
		<BaseTableGroup>
			<template #head>
				<tr>
					<th v-for="(field, index) in tableFields" :key="index">{{ field.label }}</th>
					<th></th>
				</tr>
			</template>
			<template #body>
				<tr v-for="project in projects" :key="project.id">
					<td v-for="(field, index) in tableFields" :key="index">{{ project[field.key] }}</td>
					<td>
						<TableActionList
							:external-link="project.domain"
							:link="{ name: RouteName.ProjectsSlug, params: { slug: project.id } }"
							@onEdit="openProjectModal({ project })"
							@onDelete="openDeleteProjectModal({ projectTitle: project.title })"
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
					@onEdit="openProjectModal({ project })"
					@onDelete="openDeleteProjectModal({ projectTitle: project.title })"
				/>
			</template>
		</BaseTableGroup>
		<ProjectModal
			v-if="projectModalIsOpen"
			@onClose="closeProjectModal"
			:project="projectModalOptions.project"
		/>
		<DeleteProjectModal
			v-if="deleteProjectModalIsOpen"
			@onClose="closeDeleteProjectModal"
			:project-title="deleteProjectModalOptions.projectTitle"
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
import DeleteProjectModal from '@/features/project/modal/ui/DeleteProjectModal.vue'
import useDeleteProjectModal from '@/features/project/modal/composable/useDeleteProjectModal'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})

const { projectModalIsOpen, closeProjectModal, openProjectModal, projectModalOptions } =
	useProjectModal()
const {
	deleteProjectModalOptions,
	openDeleteProjectModal,
	closeDeleteProjectModal,
	deleteProjectModalIsOpen,
} = useDeleteProjectModal()

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
