<template>
  <BaseColumnGrid
    class="two-column-grid"
    v-bind="props"
  >
    <slot />
  </BaseColumnGrid>
</template>

<script setup lang="ts">
import BaseColumnGrid from '@/components/ui/Grid/BaseColumnGrid.vue'
import { Indent } from '@/global/types/ui/gap/Indent'
import type { Gap } from '@/global/types/ui/gap/Gap'

interface Props {
	desktopGap?: Gap
	tabletGap?: Gap
	mobileGap?: Gap
}

const props = withDefaults(defineProps<Props>(), {
	desktopGap: () => ({
		row: Indent.L,
		column: Indent.L,
	}),
	tabletGap: () => ({
		row: Indent.M,
		column: Indent.M,
	}),
	mobileGap: () => ({
		row: Indent.S,
		column: Indent.S,
	}),
})
</script>

<style lang="scss" scoped>
.two-column-grid {
	grid-template-columns: repeat(2, 1fr);

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
	}
}
</style>
