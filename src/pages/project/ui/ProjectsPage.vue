<template>
	<BaseInternalPage :breadcrumbs="[]" class="page" title-h1="Проекты">
		<template #head>
			<ProjectsActions />
		</template>
		<template #default>
			<BaseDataTableGroup :data="getProjects()" :fields="getTableFields()" />
		</template>
	</BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/shared/ui/InternalPage/BaseInternalPage.vue'
import BaseDataTableGroup from '@/shared/ui/Table/BaseDataTableGroup.vue'
import getTableFields from '@/shared/stories/data/table.js'
import getProjects from '@/shared/stories/data/projects.js'
import ProjectsActions from '@/features/projects/ui/ProjectsActions.vue'
</script>

<style lang="scss" scoped></style>
