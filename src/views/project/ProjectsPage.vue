<template>
  <BaseInternalPage
    :loading="isLoading"
    class="projects-page"
    title-h1="Проекты"
  >
    <template #head>
      <ProjectsActions />
    </template>
    <template #default>
      <SearchNotFound v-if="!getProjects.length && $route.query.q" />
      <ProjectsTable
        v-else
        :projects="getProjects"
      />
    </template>
  </BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/components/ui/Page/BaseInternalPage.vue'
import ProjectsActions from '@/components/Projects/ProjectsActions.vue'
import ProjectsTable from '@/components/Projects/ProjectsTable.vue'
import SearchNotFound from '@/components/Search/SearchNotFound.vue'
import { onMounted } from 'vue'
import { useProjectStore } from '@/stores/project'
import useRequest from '@/composables/useRequest'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()

const projectStore = useProjectStore()
const { getAll } = projectStore
const { getProjects } = storeToRefs(projectStore)
const { execute, isLoading } = useRequest()

onMounted(async () => {
	await execute(async () => await getAll(String(route.query.q || '')))
})
</script>

<style lang="scss" scoped></style>
