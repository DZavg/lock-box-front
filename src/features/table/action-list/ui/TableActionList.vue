<template>
	<div class="action-list">
		<ExternalLinkIcon :icon-size="iconSize" :link="project.domain" />
		<EyeButtonIcon :active="true" :icon-size="iconSize" />
		<EditButtonIcon :icon-size="iconSize" />
		<DeleteButtonIcon :icon-size="iconSize" />
	</div>
</template>

<script lang="ts" setup>
import ExternalLinkIcon from '@/shared/ui/Link/ExternalLinkIcon.vue'
import EyeButtonIcon from '@/shared/ui/Button/EyeButtonIcon.vue'
import EditButtonIcon from '@/shared/ui/Button/EditButtonIcon.vue'
import DeleteButtonIcon from '@/shared/ui/Button/DeleteButtonIcon.vue'
import { type Project } from '@/shared/model/types/Project/Project'
import { computed } from 'vue'
import useScreen from '@/app/composable/useScreen'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

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

const iconSize = computed(() => (isMobile.value ? IconSize.S : IconSize.M))
</script>

<style lang="scss" scoped>
.action-list {
	display: flex;
	align-items: center;
	gap: $indent-2xl;

	@media screen and (max-width: 991px) {
		gap: $indent-xl;
	}

	@media screen and (max-width: 768px) {
		gap: $indent-m;
	}
}
</style>
