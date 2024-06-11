<template>
	<BaseCard :padding-size="CardPaddingSize.Small" class="table-card">
		<slot></slot>
	</BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/shared/ui/Card/BaseCard.vue'
import { CardPaddingSize } from '@/shared/model/types/Card/CardPaddingSize'
</script>

<style lang="scss" scoped>
.table-card {
	display: flex;
	flex-direction: column;
	gap: $indent-xs;
}
</style>
