<template>
	<button @click="updateIndexActiveTab">
		<slot></slot>
	</button>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { type TabsData } from '@/shared/types/TabsData'

interface Props {
	index: number
}

const props = withDefaults(defineProps<Props>(), {
	index: 0,
})

const tabsData = inject('tabsData') as TabsData

const updateIndexActiveTab = () => {
	tabsData.updateActiveTabIndex && tabsData.updateActiveTabIndex(props.index)
}
</script>

<style lang="scss" scoped></style>
