<template>
	<div class="base-tabs">
		<div class="base-tabs__head">
			<slot name="head"></slot>
		</div>
		<div class="base-tabs__body">
			<slot name="body"></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { provide, type Ref, ref, watch } from 'vue'
import { type TabsData } from '@/shared/types/Tabs/TabsData'

interface Props {
	activeIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
	activeIndex: 0,
})

const activeTabIndex: Ref<number> = ref(props.activeIndex)

function updateActiveTabIndex(index: number) {
	if (activeTabIndex.value !== index) {
		activeTabIndex.value = index
	}
}

watch(
	() => props.activeIndex,
	(val) => {
		activeTabIndex.value = val
	},
)

const tabsData: TabsData = {
	activeTabIndex,
	updateActiveTabIndex,
}

provide('tabsData', tabsData)
</script>

<style lang="scss" scoped></style>
