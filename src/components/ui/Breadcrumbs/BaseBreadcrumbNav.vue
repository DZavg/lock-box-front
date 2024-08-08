<template>
  <nav
    aria-label="Breadcrumb"
    class="breadcrumb-nav"
  >
    <ul class="breadcrumb-nav__list">
      <li
        v-for="(breadcrumb, index) in sliceBreadcrumbs"
        :key="index"
      >
        <BaseLink
          :color="Color.GrayThird"
          :link="breadcrumb.link"
          class="breadcrumb-nav__link caption_p"
        >
          <span>{{ breadcrumb.title }}</span>
          <svg class="breadcrumb-nav__icon icon-16">
            <use :href="iconArrowSmall + '#icon'" />
          </svg>
        </BaseLink>
      </li>
      <li>
        <BaseLink
          :color="Color.White"
          :link="breadcrumbs.at(-1)?.link"
          class="breadcrumb-nav__link caption_p"
        >
          <span>{{ breadcrumbs.at(-1)?.title }}</span>
        </BaseLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import BaseLink from '@/components/ui/Link/BaseLink.vue'
import { type Breadcrumb } from '@/global/types/api/breadcrumbs/Breadcrumb'
import { Color } from '@/global/types/ui/color/Color'
import iconArrowSmall from '/images/svg/icon-arrow-small.svg'
import { computed } from 'vue'

interface Props {
	breadcrumbs: Breadcrumb[]
}

const props = withDefaults(defineProps<Props>(), {
	breadcrumbs: () => [],
})

const sliceBreadcrumbs = computed(() => props.breadcrumbs.slice(0, props.breadcrumbs.length - 1))
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
