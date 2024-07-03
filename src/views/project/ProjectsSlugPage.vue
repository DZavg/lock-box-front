<template>
  <BaseInternalPage
    :breadcrumbs="[
      { title: 'Проекты', link: { name: RouteName.Projects } },
      { title: title, link: { name: RouteName.ProjectsSlug } },
    ]"
    class="projects-slug-page"
    :title-h1="title"
    :additional-text="getProjectsSlugPage.project?.domain"
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
      <AccessesTable :accesses="getProjectsSlugPage.accesses" />
    </template>
  </BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/components/ui/InternalPage/BaseInternalPage.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import { onMounted, ref, type Ref } from 'vue'
import useSeo from '@/composables/useSeo'
import AccessModal from '@/components/Accesses/AccessModal.vue'
import useAccessModal from '@/composables/modals/useAccessModal'
import AccessesTable from '@/components/Accesses/AccessesTable.vue'
import { RouteName } from '@/router/RouteName'
import { useProjectStore } from '@/stores/project'
import { storeToRefs } from 'pinia'
import useRequest from '@/composables/useRequest'
import { useRoute } from 'vue-router'

const route = useRoute()

const title: Ref<string> = ref('')

const { accessModalIsOpen, closeAccessModal, openAccessModal } = useAccessModal()
const projectStore = useProjectStore()

const { getAllAccesses } = projectStore
const { getProjectsSlugPage } = storeToRefs(projectStore)
const { execute } = useRequest()

onMounted(async () => {
	await execute(() => getAllAccesses(route.params.slug as string))
	title.value = getProjectsSlugPage.value.project.title
	useSeo({ title: title.value })
})
</script>

<style lang="scss" scoped></style>
