<template>
	<BaseCard :padding-size="CardPaddingSize.Small" class="project-card">
		<p class="project-card__title">{{ project.title }}</p>
		<BaseLink :color="LinkColor.White" :link="project.domain" class="project-card__domain"
			>{{ project.domain }}
		</BaseLink>
		<ProjectActionList :project="project" />
	</BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/shared/ui/Card/BaseCard.vue'
import { CardPaddingSize } from '@/shared/model/types/Card/CardPaddingSize'
import ProjectActionList from '@/features/project/action-list/ui/ProjectActionList.vue'
import { type Project } from '@/widgets/projects/table/types/Project'
import BaseLink from '@/shared/ui/Link/BaseLink.vue'
import { LinkColor } from '@/shared/model/types/Link/LinkColor'

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
</script>

<style lang="scss" scoped>
.project-card {
	&__title {
		margin-bottom: $indent-2xs;
	}

	&__domain {
		display: inline-block;
		margin-bottom: $indent-s;
	}
}
</style>
