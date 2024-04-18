<template>
	<BaseTableBody>
		<tr v-for="(dataItem, i) in data" :key="i">
			<td v-for="(field, j) in fields" :key="j">
				<BaseDataTableItem :data="dataItem" :field="field" />
			</td>
		</tr>
	</BaseTableBody>
</template>

<script lang="ts" setup>
import BaseTableBody from '@/shared/ui/Table/BaseTableBody.vue'
import { type ListField } from '@/shared/model/types/List/ListField'
import BaseDataTableItem from '@/shared/ui/Table/BaseDataTableItem.vue'

interface Props {
	fields: ListField[]
	data: { [key: string]: any }[]
}

withDefaults(defineProps<Props>(), {
	fields: () => [],
	data: () => [],
})
</script>

<style scoped></style>
