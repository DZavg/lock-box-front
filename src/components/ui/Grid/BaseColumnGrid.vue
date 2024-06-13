<template>
  <div class="column-grid">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Gap } from '@/model/types/Gap/Gap'
import { Indent } from '@/model/types/Gap/Indent'

interface Props {
	desktopGap?: Gap
	tabletGap?: Gap
	mobileGap?: Gap
}

const props = withDefaults(defineProps<Props>(), {
	desktopGap: () => ({
		row: Indent.S,
		column: Indent.S,
	}),
	tabletGap: () => ({
		row: Indent.S,
		column: Indent.S,
	}),
	mobileGap: () => ({
		row: Indent.S,
		column: Indent.S,
	}),
})
</script>

<!--TODO: create story-->

<style lang="scss" scoped>
.column-grid {
	display: grid;
	gap: v-bind('props.desktopGap.row') v-bind('props.desktopGap.column');

	@media screen and (max-width: 991px) {
		gap: v-bind('props.tabletGap.row') v-bind('props.tabletGap.column');
	}

	@media screen and (max-width: 768px) {
		gap: v-bind('props.mobileGap.row') v-bind('props.mobileGap.column');
	}
}
</style>
