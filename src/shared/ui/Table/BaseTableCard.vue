<template>
	<BaseCard :padding-size="CardPaddingSize.Small" class="table-card">
		<div v-for="(field, index) in fields" :key="index" class="table-card__item caption_p">
			<p v-if="field.label" class="table-card__label">{{ field.label }}</p>
			<BaseDataTableItem :data="data[index]" :field="field" />
		</div>
	</BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/shared/ui/Card/BaseCard.vue'
import { CardPaddingSize } from '@/shared/model/types/Card/CardPaddingSize'
import { type ListField, type ListFieldData } from '@/shared/model/types/List/ListField'
import BaseDataTableItem from '@/shared/ui/Table/BaseDataTableItem.vue'

interface Props {
	fields: ListField[]
	data: ListFieldData
}

withDefaults(defineProps<Props>(), {
	field: () => [],
	data: () => ({}),
})
</script>

<style lang="scss" scoped>
.table-card {
	display: flex;
	flex-direction: column;
	gap: $indent-xs;

	&__item {
		display: flex;
		flex-direction: column;
		gap: $indent-2xs;
	}

	&__label {
		color: $color-gray-secondary;
	}
}
</style>
