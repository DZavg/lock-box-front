<template>
	<BaseInternalPage :breadcrumbs="[]" class="page" title-h1="Проекты">
		<template #head>
			<ProjectsActions />
		</template>
		<template #default>
			<ProjectsTable :projects="getProjects()" />
		</template>
	</BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/shared/ui/InternalPage/BaseInternalPage.vue'
import ProjectsActions from '@/features/projects/ui/ProjectsActions.vue'
import getProjects from '@/shared/stories/data/projects'
import ProjectsTable from '@/widgets/projects/ui/ProjectsTable.vue'
</script>

<style lang="scss" scoped></style>
