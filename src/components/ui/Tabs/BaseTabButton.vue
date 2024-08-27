<template>
  <button
    :class="{ ['tab-button--active']: isActive }"
    class="tab-button body_p_second"
    :disabled="disabled"
    @click="updateNameActiveTab"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { type TabsData } from '@/global/types/ui/tabs/TabsData'

interface Props {
	name: string
	disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
	name: '',
	disabled: false,
})

const tabsData = inject('tabsData') as TabsData
const isActive = computed(() => tabsData.activeTabName.value === props.name)

const emits = defineEmits<(e: 'updateActiveTab', value: string) => void>()

const updateNameActiveTab = () => {
	tabsData.updateActiveTabName && tabsData.updateActiveTabName(props.name)
	emits('updateActiveTab', props.name)
}
</script>

<style lang="scss" scoped>
.tab-button {
	padding: 11px 12px;
	color: $color-white;
	user-select: none;
	white-space: nowrap;

	&--active {
		border-bottom: 2px solid $color-blue-primary;
	}
}
</style>
