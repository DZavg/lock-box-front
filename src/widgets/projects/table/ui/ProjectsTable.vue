<template>
	<BaseTable class="projects-table">
		<ProjectsTableHead />
		<ProjectsTableBody :projects="projects" />
	</BaseTable>
</template>

<script lang="ts" setup>
import BaseTable from '@/shared/ui/Table/BaseTable.vue'
import ProjectsTableBody from '@/widgets/projects/table/ui/ProjectsTableBody.vue'
import ProjectsTableHead from '@/widgets/projects/table/ui/ProjectsTableHead.vue'
import { type Project } from '@/widgets/projects/table/types/Project'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})
</script>
