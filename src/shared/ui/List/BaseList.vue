<template>
	<ul class="list caption_p">
		<li v-for="field in fields" :key="field.data" class="list-item">
			<span v-if="field.label" class="list-item__label">{{ field.label }}: </span>
			<span class="list-item__data">{{ data[field.data] }}</span>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import { type ListFields } from '@/shared/model/types/List/ListFields'

interface Props {
	fields: ListFields[]
	data: { [key: string]: any }
}

withDefaults(defineProps<Props>(), {
	fields: () => [],
	data: () => ({}),
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
