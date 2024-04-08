<template>
	<BaseTableBody class="projects-table-body">
		<ProjectsTableRow v-for="project in projects" :key="project.id" :project="project" />
	</BaseTableBody>
</template>

<script lang="ts" setup>
import BaseTableBody from '@/shared/ui/Table/BaseTableBody.vue'
import { type Project } from '@/widgets/projects/table/types/Project'
import ProjectsTableRow from '@/widgets/projects/table/ui/ProjectsTableRow.vue'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})
</script>

<style lang="scss" scoped></style>
