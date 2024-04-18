<template>
	<div class="data-table-group">
		<BaseTableCard v-if="isMobile" :data="data" :fields="fields" />
		<BaseDataTable v-else :data="data" :fields="fields" />
	</div>
</template>

<script lang="ts" setup>
import BaseTableCard from '@/shared/ui/Table/BaseTableCard.vue'
import { type ListField, type ListFieldData } from '@/shared/model/types/List/ListField'
import useScreen from '@/shared/lib/composable/useScreen'
import BaseDataTable from '@/shared/ui/Table/BaseDataTable.vue'

interface Props {
	fields: ListField[]
	data: ListFieldData
}

withDefaults(defineProps<Props>(), {
	field: () => [],
	data: () => ({}),
})

const { isMobile } = useScreen()
</script>

<style scoped></style>
