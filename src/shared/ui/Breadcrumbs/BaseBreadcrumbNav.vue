<template>
	<nav aria-label="Breadcrumb" class="breadcrumb-nav">
		<ul class="breadcrumb-nav__list">
			<li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
				<BaseLink
					:color="linkColor(index)"
					:link="breadcrumb.link"
					class="breadcrumb-nav__link caption_p"
				>
					<span>{{ breadcrumb.title }}</span>
					<svg v-if="!isLastElement(index)" class="breadcrumb-nav__icon icon-16">
						<use :href="iconArrowSmall + '#icon'" />
					</svg>
				</BaseLink>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup>
import BaseLink from '@/shared/ui/Link/BaseLink.vue'
import { type Breadcrumb } from '@/shared/model/types/Breadcrumbs/Breadcrumb'
import { Color } from '@/shared/model/types/Color/Color'
import iconArrowSmall from '@/shared/images/svg/icon-arrow-small.svg'

interface Props {
	breadcrumbs: Breadcrumb[]
}

const props = withDefaults(defineProps<Props>(), {
	breadcrumbs: () => [],
})

const isLastElement = (index: number) => props.breadcrumbs.length - 1 === index
const linkColor = (index: number) => (isLastElement(index) ? Color.White : Color.GrayThird)
</script>

<style lang="scss" scoped>
.breadcrumb-nav {
	&__list {
		@include scrollbar(true);

		display: flex;
		overflow: auto hidden;
		align-items: center;
		gap: $indent-xs;
	}

	&__link {
		display: flex;
		align-items: center;
		gap: $indent-xs;
		white-space: nowrap;
	}

	&__icon {
		fill: $color-white;
	}
}
</style>
