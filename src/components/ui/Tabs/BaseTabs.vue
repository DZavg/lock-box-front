<template>
  <div class="base-tabs">
    <div class="base-tabs__head">
      <slot name="head" />
    </div>
    <div class="base-tabs__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { provide, type Ref, ref, watch } from 'vue'
import { type TabsData } from '@/shared/model/types/Tabs/TabsData'

interface Props {
	activeTabName?: string
}

const props = withDefaults(defineProps<Props>(), {
	activeTabName: '',
})

const activeTabName: Ref<string> = ref(props.activeTabName)

function updateActiveTabName(name: string) {
	if (activeTabName.value !== name) {
		activeTabName.value = name
	}
}

watch(
	() => props.activeTabName,
	(val) => {
		activeTabName.value = val
	},
)

const tabsData: TabsData = {
	activeTabName,
	updateActiveTabName,
}

provide('tabsData', tabsData)
</script>

<style lang="scss" scoped>
.base-tabs {
	display: flex;
	flex-direction: column;
	gap: $indent-m;

	@media screen and (max-width: 768px) {
		gap: $indent-s;
	}

	&__head {
		@include scrollbar(true);

		display: flex;
		overflow: auto hidden;
		gap: $indent-s;
	}
}
</style>
