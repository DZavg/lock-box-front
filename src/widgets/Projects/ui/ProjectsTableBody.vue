<template>
	<BaseTableBody class="projects-table-body">
		<tr v-for="project in projects" :key="project.id">
			<td>{{ project.title }}</td>
			<td>
				<BaseLink :color="LinkColor.White" :link="project.domain">{{ project.domain }}</BaseLink>
			</td>
			<td>
				<ProjectsActionList :project="project" class="projects-table-body__action-list" />
			</td>
		</tr>
	</BaseTableBody>
</template>

<script lang="ts" setup>
import BaseTableBody from '@/shared/ui/Table/BaseTableBody.vue'
import { type Project } from '@/widgets/Projects/types/Project'
import { LinkColor } from '@/shared/types/Link/LinkColor'
import BaseLink from '@/shared/ui/Link/BaseLink.vue'
import ProjectsActionList from '@/features/Project/ui/ProjectsActionList.vue'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})
</script>

<style lang="scss" scoped>
.projects-table-body {
	&__action-list {
		justify-content: flex-end;
	}
}
</style>
