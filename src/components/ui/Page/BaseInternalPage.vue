<template>
  <div class="page">
    <BaseBreadcrumbNav
      v-if="breadcrumbs.length && !loading"
      :breadcrumbs="breadcrumbs"
      class="page__breadcrumb-nav"
    />
    <div
      v-if="!loading"
      class="page__head"
    >
      <div class="page__title">
        <h1>{{ titleH1 }}</h1>
        <BasePoint v-if="!isMobile && additionalText" />
        <p
          v-if="additionalText"
          class="h1"
        >
          {{ additionalText }}
        </p>
      </div>
      <slot name="head" />
    </div>
    <BasePageLoading v-if="loading" />
    <slot v-else />
  </div>
</template>

<script lang="ts" setup>
import BaseBreadcrumbNav from '@/components/ui/Breadcrumbs/BaseBreadcrumbNav.vue'
import { type Breadcrumb } from '@/global/types/api/breadcrumbs/Breadcrumb'
import BasePoint from '@/components/ui/Point/BasePoint.vue'
import useScreen from '@/composables/useScreen'
import BasePageLoading from '@/components/ui/Page/BasePageLoading.vue'

interface Props {
	breadcrumbs?: Breadcrumb[]
	titleH1: string
	additionalText?: string
	loading?: boolean
}

withDefaults(defineProps<Props>(), {
	breadcrumbs: () => [],
	titleH1: '',
	additionalText: '',
	loading: false,
})

const { isMobile } = useScreen()
</script>

<style lang="scss" scoped>
.page {
	display: flex;
	width: 100%;
	flex-direction: column;
	margin: $indent-xl 0;

	@media screen and (max-width: 768px) {
		margin: $indent-m 0;
	}

	&__title {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: $indent-xs $indent-s;
		word-break: break-word;

		@media screen and (max-width: 768px) {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	&__head {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: $indent-m;
		gap: $indent-l;

		@media screen and (max-width: 991px) {
			gap: $indent-m;
		}

		@media screen and (max-width: 768px) {
			gap: $indent-s;
		}
	}

	&__breadcrumb-nav {
		margin-bottom: $indent-xs;
	}
}
</style>
