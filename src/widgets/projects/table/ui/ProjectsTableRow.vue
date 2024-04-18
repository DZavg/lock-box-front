<template>
	<tr class="projects-table-row">
		<td>{{ project.title }}</td>
		<td>
			<BaseLink :color="LinkColor.White" :link="project.domain">{{ project.domain }}</BaseLink>
		</td>
		<td>
			<TableActionList :project="project" class="projects-table-row__action-list" />
		</td>
	</tr>
</template>

<script lang="ts" setup>
import { type Project } from '@/widgets/projects/table/types/Project'
import BaseLink from '@/shared/ui/Link/BaseLink.vue'
import { LinkColor } from '@/shared/model/types/Link/LinkColor'
import TableActionList from '@/features/table/action-list/ui/TableActionList.vue'

interface Props {
	project: Project
}

withDefaults(defineProps<Props>(), {
	project: () => ({
		id: '',
		title: '',
		domain: '',
	}),
})
</script>

<style lang="scss" scoped>
.projects-table-row {
	&__action-list {
		justify-content: flex-end;
	}
}
</style>
