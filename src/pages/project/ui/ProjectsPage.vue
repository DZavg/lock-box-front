<template>
	<BaseInternalPage class="projects-page" title-h1="Проекты">
		<template #head>
			<ProjectsActions />
		</template>
		<template #default>
			<ProjectsTable :projects="projectPageData.projects" />
		</template>
	</BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/shared/ui/InternalPage/BaseInternalPage.vue'
import ProjectsActions from '@/features/projects/ui/ProjectsActions.vue'
import ProjectsTable from '@/widgets/projects/ui/ProjectsTable.vue'
import { projectPageData } from '@/pages/project/data/ProjectPageData'
</script>

<style lang="scss" scoped></style>
