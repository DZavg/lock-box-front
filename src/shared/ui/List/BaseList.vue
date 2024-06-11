<template>
	<ul class="list caption_p">
		<li v-for="field in fields" :key="field.key" class="list-item">
			<span class="list-item__label">{{ field.label }}: </span>
			<span class="list-item__value">{{ value[field.key] }}</span>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import { type ListField, type ListValue } from '@/shared/model/types/List/List'

interface Props {
	fields: ListField[]
	value: ListValue
}

withDefaults(defineProps<Props>(), {
	fields: () => [],
	value: () => ({}),
})
</script>

<style lang="scss" scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: $indent-xs;

	&-item {
		display: flex;
		flex-direction: column;
		gap: $indent-2xs;

		&__label {
			color: $color-gray-secondary;
		}
	}
}
</style>
