<template>
  <BaseInternalPage
    :loading="isLoading"
    class="projects-page"
    title-h1="Проекты"
  >
    <template #head>
      <ProjectsActions @on-success="fetchProjects" />
    </template>
    <template #default>
      <SearchNotFound v-if="!getProjects.length && $route.query.q" />
      <template v-else>
        <BaseEmptyState
          v-if="!getProjectsTotalCount"
          text="Нет проектов"
        />
        <ProjectsTable
          v-else
          :projects="getProjects"
          @on-success="fetchProjects"
        />
      </template>
    </template>
  </BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/components/ui/Page/BaseInternalPage.vue'
import ProjectsActions from '@/components/Projects/ProjectsActions.vue'
import ProjectsTable from '@/components/Projects/ProjectsTable.vue'
import SearchNotFound from '@/components/Search/SearchNotFound.vue'
import { onMounted, watch } from 'vue'
import { useProjectStore } from '@/stores/project'
import useRequest from '@/composables/useRequest'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import BaseEmptyState from '@/components/ui/Empty/BaseEmptyState.vue'

const route = useRoute()

const projectStore = useProjectStore()
const { getAll } = projectStore
const { getProjects, getProjectsTotalCount } = storeToRefs(projectStore)
const { execute, isLoading } = useRequest()

const fetchProjects = async () => {
	await execute(async () => await getAll(String(route.query.q || '')))
}

watch(
	() => route.query.q,
	async (value, oldValue) => {
		if (typeof value === 'undefined' && oldValue) {
			await fetchProjects()
		}
	},
)

onMounted(async () => {
	await fetchProjects()
})
</script>

<style lang="scss" scoped></style>
