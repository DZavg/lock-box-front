<template>
  <div
    v-if="isActive"
    class="tab-content"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { type TabsData } from '@/global/types/ui/tabs/TabsData'

interface Props {
	name: string
}

const props = withDefaults(defineProps<Props>(), {
	name: '',
})

const tabsData = inject('tabsData') as TabsData

const isActive = computed(() => {
	return tabsData.activeTabName.value === props.name
})
</script>

<style lang="scss" scoped></style>
