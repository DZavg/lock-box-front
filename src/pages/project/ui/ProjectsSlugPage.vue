<template>
	<BaseInternalPage
		:breadcrumbs="getBreadcrumbs()"
		class="projects-slug-page"
		:title-h1="title"
		additional-text="ivolga.moscow"
	>
		<template #head>
			<BaseButton class="projects-actions__button">Добавить доступ</BaseButton>
		</template>
		<template #default>
			<BaseDataTableGroup :data="getProjects()" :fields="getTableFields()" />
		</template>
	</BaseInternalPage>
</template>

<script lang="ts" setup>
import BaseInternalPage from '@/shared/ui/InternalPage/BaseInternalPage.vue'
import BaseDataTableGroup from '@/shared/ui/Table/BaseDataTableGroup.vue'
import getTableFields from '@/shared/stories/data/table.js'
import getProjects from '@/shared/stories/data/projects.js'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import getBreadcrumbs from '@/shared/stories/data/breadcrumbs'
import { ref, type Ref } from 'vue'
import useSeo from '@/app/composable/useSeo'

const title: Ref<string> = ref('Бренд одежды "IVOLGA"')

useSeo({ title: title.value })
</script>

<style lang="scss" scoped></style>
