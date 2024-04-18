<template>
	<BaseTableHead>
		<tr>
			<th v-for="(field, index) in fields" :key="index">
				{{ field.label }}
			</th>
		</tr>
	</BaseTableHead>
</template>

<script lang="ts" setup>
import BaseTableHead from '@/shared/ui/Table/BaseTableHead.vue'
import { type ListField } from '@/shared/model/types/List/ListField'

interface Props {
	fields: ListField[]
}

withDefaults(defineProps<Props>(), {
	fields: () => [],
})
</script>

<style scoped></style>
