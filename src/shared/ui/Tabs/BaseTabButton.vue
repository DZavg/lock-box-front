<template>
	<button
		:class="{ ['tab-button--active']: isActive }"
		class="tab-button body_p_second"
		@click="updateNameActiveTab"
	>
		<slot></slot>
	</button>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { type TabsData } from '@/shared/types/Tabs/TabsData'

interface Props {
	name: string
}

const props = withDefaults(defineProps<Props>(), {
	name: '',
})

const tabsData = inject('tabsData') as TabsData
const isActive = computed(() => tabsData.activeTabName.value === props.name)

const emits = defineEmits<{
	(e: 'updateActiveTab', value: string): void
}>()

const updateNameActiveTab = () => {
	tabsData.updateActiveTabName && tabsData.updateActiveTabName(props.name)
	emits('updateActiveTab', props.name)
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
