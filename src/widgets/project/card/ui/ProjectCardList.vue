<template>
	<div class="project-card-list">
		<ProjectCard v-for="project in projects" :key="project.id" :project="project" />
	</div>
</template>

<script lang="ts" setup>
import ProjectCard from '@/widgets/project/card/ui/ProjectCard.vue'
import { type Project } from '@/widgets/project/table/types/Project'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})
</script>

<style lang="scss" scoped>
.project-card-list {
	display: flex;
	flex-direction: column;
	gap: $indent-xs;
}
</style>
