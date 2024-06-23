<template>
  <BaseInternalPage
    class="projects-page"
    title-h1="Проекты"
  >
    <template #head>
      <ProjectsActions />
    </template>
    <template #default>
      <ProjectsTable
        v-if="true"
        :projects="projectPage?.projects"
      />
      <SearchNotFound v-else />
    </template>
  </BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/components/ui/InternalPage/BaseInternalPage.vue'
import ProjectsActions from '@/components/Projects/ProjectsActions.vue'
import ProjectsTable from '@/components/Projects/ProjectsTable.vue'
import SearchNotFound from '@/components/Search/SearchNotFound.vue'
import { onMounted } from 'vue'
import { useProjectStore } from '@/stores/project'
import useRequest from '@/composables/useRequest'

const projectStore = useProjectStore()
const { getAll } = projectStore
const { data: projectPage, execute } = useRequest()

onMounted(async () => {
	await execute(getAll)
})
</script>

<style lang="scss" scoped></style>
