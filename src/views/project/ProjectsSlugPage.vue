<template>
  <BaseInternalPage
    :loading="isLoading"
    :breadcrumbs="breadcrumbs"
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
      <CreateAccessModal
        v-if="accessModalIsOpen"
        :project-id="slug"
        @on-success="getAccesses"
        @on-close="closeAccessModal"
      />
    </template>
    <template #default>
      <BaseEmptyState
        v-if="!getProjectsSlugPage.accesses?.length"
        text="Нет доступов"
      />
      <AccessesTable
        v-else
        :accesses="getProjectsSlugPage.accesses"
        @on-success="getAccesses"
      />
    </template>
  </BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/components/ui/Page/BaseInternalPage.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import { onMounted, ref, type Ref } from 'vue'
import useSeo from '@/composables/useSeo'
import AccessesTable from '@/components/Accesses/AccessesTable.vue'
import { RouteName } from '@/router/RouteName'
import { useProjectStore } from '@/stores/project'
import { storeToRefs } from 'pinia'
import useRequest from '@/composables/useRequest'
import { useRoute } from 'vue-router'
import useModal from '@/composables/useModal'
import type { Breadcrumb } from '@/global/types/api/breadcrumbs/Breadcrumb'
import CreateAccessModal from '@/components/Accesses/Modals/CreateAccessModal.vue'
import BaseEmptyState from '@/components/ui/Empty/BaseEmptyState.vue'

const route = useRoute()
const slug = route.params.slug as string

const title: Ref<string> = ref('')
const breadcrumbs: Ref<Breadcrumb[]> = ref([
	{ title: 'Проекты', link: { name: RouteName.Projects } },
	{ title: title, link: { name: RouteName.ProjectsSlug } },
])

const {
	openModal: openAccessModal,
	closeModal: closeAccessModal,
	modalIsOpen: accessModalIsOpen,
} = useModal()

const projectStore = useProjectStore()
const { getAllAccessesById } = projectStore
const { getProjectsSlugPage } = storeToRefs(projectStore)

const { execute, isLoading } = useRequest()

const getAccesses = async () => {
	await execute(async () => await getAllAccessesById(slug))
}

onMounted(async () => {
	await getAccesses()
	title.value = getProjectsSlugPage.value?.project?.title
	useSeo({ title: title.value })
})
</script>

<style lang="scss" scoped></style>
