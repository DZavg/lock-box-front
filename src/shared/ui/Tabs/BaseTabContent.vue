<template>
	<div class="tab-content" v-show="isActive">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { type TabsData } from '@/shared/types/TabsData'

interface Props {
	index: number
}

const props = withDefaults(defineProps<Props>(), {
	index: 0,
})

const tabsData = inject('tabsData') as TabsData

const isActive = computed(() => {
	return tabsData.activeTabIndex.value === props.index
})
</script>

<style lang="scss" scoped></style>
