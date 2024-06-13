<template>
  <BaseInternalPage
    :breadcrumbs="[
      { title: 'Проекты', link: { name: RouteName.Projects } },
      { title: projectsSlugPageData.title, link: { name: RouteName.ProjectsSlug } },
    ]"
    class="projects-slug-page"
    :title-h1="title"
    :additional-text="projectsSlugPageData.domain"
  >
    <template #head>
      <BaseButton
        class="projects-actions__button"
        @on-click="openAccessModal"
      >
        Добавить доступ
      </BaseButton>
      <AccessModal
        v-if="accessModalIsOpen"
        title="Добавить доступ"
        @on-close="closeAccessModal"
      />
    </template>
    <template #default>
      <AccessesTable :accesses="projectsSlugPageData.accesses" />
    </template>
  </BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/components/ui/InternalPage/BaseInternalPage.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import { ref, type Ref } from 'vue'
import useSeo from '@/composable/useSeo'
import AccessModal from '@/components/Accesses/AccessModal.vue'
import useAccessModal from '@/composable/Access/useAccessModal'
import AccessesTable from '@/components/Accesses/AccessesTable.vue'
import { projectsSlugPageData } from '@/views/project/data/ProjectsSlugPageData'
import { RouteName } from '@/router/RouteName'

const title: Ref<string> = ref(projectsSlugPageData.title)

useSeo({ title: title.value })
const { accessModalIsOpen, closeAccessModal, openAccessModal } = useAccessModal()
</script>

<style lang="scss" scoped></style>
