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
        :projects="projectsPageData.projects"
      />
      <SearchNotFound v-else />
    </template>
  </BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/components/ui/InternalPage/BaseInternalPage.vue'
import ProjectsActions from '@/components/Projects/ProjectsActions.vue'
import ProjectsTable from '@/components/Projects/ProjectsTable.vue'
import { projectsPageData } from '@/global/mock/pages/projects/ProjectsPageData'
import SearchNotFound from '@/components/Search/SearchNotFound.vue'
</script>

<style lang="scss" scoped></style>
