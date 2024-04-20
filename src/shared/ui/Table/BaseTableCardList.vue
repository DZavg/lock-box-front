<template>
	<div class="table-card-list">
		<BaseTableCard v-for="(item, index) in data" :key="index" :data="item" :fields="fields" />
	</div>
</template>

<script lang="ts" setup>
import { type ListField, type ListFieldData } from '@/shared/model/types/List/ListField'
import BaseTableCard from '@/shared/ui/Table/BaseTableCard.vue'

interface Props {
	fields: ListField[]
	data: ListFieldData
}

withDefaults(defineProps<Props>(), {
	fields: () => [],
	data: () => ({}),
})
</script>

<style lang="scss" scoped>
.table-card-list {
	display: flex;
	flex-direction: column;
	gap: $indent-xs;
}
</style>
