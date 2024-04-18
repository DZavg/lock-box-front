<template>
	<BaseTable>
		<template #default>
			<BaseDataTableHead :fields="fields" />
			<BaseDataTableBody :data="data" :fields="fields" />
		</template>
	</BaseTable>
</template>

<script lang="ts" setup>
import BaseTable from '@/shared/ui/Table/BaseTable.vue'
import BaseDataTableHead from '@/shared/ui/Table/BaseDataTableHead.vue'
import BaseDataTableBody from '@/shared/ui/Table/BaseDataTableBody.vue'
import { type ListField } from '@/shared/model/types/List/ListField'

interface Props {
	fields: ListField[]
	data: { [key: string]: any }[]
}

withDefaults(defineProps<Props>(), {
	fields: () => [],
	data: () => [],
})
</script>

<style lang="scss" scoped></style>
