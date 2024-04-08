<template>
	<div class="projects-group">
		<ProjectsTable v-if="!isMobile" :projects="getProjects()" />
		<ProjectCardList v-else :projects="getProjects()" />
	</div>
</template>

<script lang="ts" setup>
import ProjectsTable from '@/widgets/projects/table/ui/ProjectsTable.vue'
import { type Project } from '@/widgets/projects/table/types/Project'
import ProjectCardList from '@/widgets/project/card/ui/ProjectCardList.vue'
import useScreen from '@/shared/lib/composable/useScreen'
import getProjects from '@/shared/stories/data/projects'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})

const { isMobile } = useScreen()
</script>

<style lang="scss" scoped></style>
