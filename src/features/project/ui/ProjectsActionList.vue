<template>
	<BaseActionList class="projects-action-list">
		<ExternalLinkIcon :icon-size="iconSize" :link="project.domain" />
		<EyeButtonIcon :active="true" :icon-size="iconSize" />
		<EditButtonIcon :icon-size="iconSize" />
		<DeleteButtonIcon :icon-size="iconSize" />
	</BaseActionList>
</template>

<script lang="ts" setup>
import ExternalLinkIcon from '@/shared/ui/Link/ExternalLinkIcon.vue'
import EyeButtonIcon from '@/shared/ui/Button/EyeButtonIcon.vue'
import EditButtonIcon from '@/shared/ui/Button/EditButtonIcon.vue'
import DeleteButtonIcon from '@/shared/ui/Button/DeleteButtonIcon.vue'
import { type Project } from '@/widgets/projects/types/Project'
import { computed } from 'vue'
import useScreen from '@/shared/lib/composable/useScreen'
import BaseActionList from '@/shared/ui/Action/BaseActionList.vue'

interface Props {
	project: Project
}

withDefaults(defineProps<Props>(), {
	project: () => ({
		id: '',
		title: '',
		domain: '',
	}),
})

const { isMobile } = useScreen()

const iconSize = computed(() => (isMobile.value ? 16 : 24))
</script>

<style lang="scss" scoped></style>
