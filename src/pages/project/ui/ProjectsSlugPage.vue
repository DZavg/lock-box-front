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
			<BaseButton class="projects-actions__button" @onClick="openAccessModal"
				>Добавить доступ</BaseButton
			>
			<AccessModal v-if="accessModalIsOpen" title="Добавить доступ" @onClose="closeAccessModal" />
		</template>
		<template #default>
			<AccessesTable :accesses="projectsSlugPageData.accesses" />
		</template>
	</BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/shared/ui/InternalPage/BaseInternalPage.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import { ref, type Ref } from 'vue'
import useSeo from '@/app/composable/useSeo'
import AccessModal from '@/features/access/edit/ui/AccessModal.vue'
import useAccessModal from '@/features/access/edit/composable/useAccessModal'
import AccessesTable from '@/widgets/accesses/ui/AccessesTable.vue'
import { projectsSlugPageData } from '@/pages/project/data/ProjectsSlugPageData'
import { RouteName } from '@/app/router/RouteName'

const title: Ref<string> = ref(projectsSlugPageData.title)

useSeo({ title: title.value })
const { accessModalIsOpen, closeAccessModal, openAccessModal } = useAccessModal()
</script>

<style lang="scss" scoped></style>
