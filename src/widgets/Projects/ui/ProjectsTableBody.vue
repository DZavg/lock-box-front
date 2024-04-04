<template>
	<BaseTableBody class="projects-table-body">
		<tr v-for="project in projects" :key="project.id">
			<td>{{ project.title }}</td>
			<td>
				<BaseLink :color="LinkColor.White" :link="project.domain">{{ project.domain }}</BaseLink>
			</td>
			<td></td>
		</tr>
	</BaseTableBody>
</template>

<script lang="ts" setup>
import BaseTableBody from '@/shared/ui/Table/BaseTableBody.vue'
import { type Project } from '@/widgets/Projects/types/Project'
import { LinkColor } from '@/shared/types/Link/LinkColor'
import BaseLink from '@/shared/ui/Link/BaseLink.vue'

interface Props {
	projects: Project[]
}

withDefaults(defineProps<Props>(), {
	projects: () => [],
})
</script>

<style lang="scss" scoped></style>
