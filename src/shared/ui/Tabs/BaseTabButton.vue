<template>
	<button
		class="tab-button body_p_second"
		:class="{ ['tab-button--active']: isActive }"
		@click="updateIndexActiveTab"
	>
		<slot></slot>
	</button>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { type TabsData } from '@/shared/types/Tabs/TabsData'

interface Props {
	index: number
}

const props = withDefaults(defineProps<Props>(), {
	index: 0,
})

const tabsData = inject('tabsData') as TabsData
const isActive = computed(() => tabsData.activeTabIndex.value === props.index)

const updateIndexActiveTab = () => {
	tabsData.updateActiveTabIndex && tabsData.updateActiveTabIndex(props.index)
}
</script>

<style lang="scss" scoped>
.tab-button {
	color: $color-white;
	padding: 11px 12px;
	user-select: none;

	&--active {
		border-bottom: 2px solid $color-blue-primary;
	}
}
</style>
