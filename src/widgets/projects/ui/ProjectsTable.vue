<template>
	<BaseTable class="projects-table">
		<ProjectsTableHead />
		<ProjectsTableBody :projects="projectTableBody" />
	</BaseTable>
</template>

<script lang="ts" setup>
import BaseTable from '@/shared/ui/Table/BaseTable.vue'
import { projectTableBody } from '@/widgets/projects/data/ProjectTable'
import ProjectsTableBody from '@/widgets/projects/ui/ProjectsTableBody.vue'
import ProjectsTableHead from '@/widgets/projects/ui/ProjectsTableHead.vue'
</script>

<style lang="scss" scoped></style>
