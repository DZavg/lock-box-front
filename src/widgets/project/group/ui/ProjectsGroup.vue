<template>
	<div class="projects-group">
		<ProjectsTable v-if="!isMobile" :projects="projectTableBody" />
		<ProjectCardList v-else :projects="projectTableBody" />
	</div>
</template>

<script lang="ts" setup>
import ProjectsTable from '@/widgets/project/table/ui/ProjectsTable.vue'
import { type Project } from '@/widgets/project/table/types/Project'
import ProjectCardList from '@/widgets/project/card/ui/ProjectCardList.vue'
import { projectTableBody } from '@/widgets/project/table/data/ProjectTable'
import useScreen from '@/shared/lib/composable/useScreen'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})

const { isMobile } = useScreen()
</script>

<style lang="scss" scoped></style>
