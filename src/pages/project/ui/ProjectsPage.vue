<template>
  <BaseInternalPage
    class="projects-page"
    title-h1="Проекты"
  >
    <template #head>
      <ProjectsActions />
    </template>
    <template #default>
      <ProjectsTable :projects="projectsPageData.projects" />
    </template>
  </BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/components/ui/InternalPage/BaseInternalPage.vue'
import ProjectsActions from '@/components/Projects/ProjectsActions.vue'
import ProjectsTable from '@/widgets/projects/ui/ProjectsTable.vue'
import { projectsPageData } from '@/pages/project/data/ProjectsPageData'
</script>

<style lang="scss" scoped></style>
