<template>
	<BaseInternalPage
		:breadcrumbs="getBreadcrumbs()"
		class="projects-slug-page"
		:title-h1="title"
		additional-text="ivolga.moscow"
	>
		<template #head>
			<BaseButton class="projects-actions__button" @onClick="openAccessModal"
				>Добавить доступ</BaseButton
			>
			<AccessModal v-if="accessModalIsOpen" title="Добавить доступ" @onClose="closeAccessModal" />
		</template>
		<template #default> </template>
	</BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/shared/ui/InternalPage/BaseInternalPage.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import getBreadcrumbs from '@/shared/stories/data/breadcrumbs'
import { ref, type Ref } from 'vue'
import useSeo from '@/app/composable/useSeo'
import AccessModal from '@/features/access/edit/ui/AccessModal.vue'
import useAccessModal from '@/features/access/edit/composable/useAccessModal'

const title: Ref<string> = ref('Бренд одежды "IVOLGA"')

useSeo({ title: title.value })
const { accessModalIsOpen, closeAccessModal, openAccessModal } = useAccessModal()
</script>

<style lang="scss" scoped></style>
