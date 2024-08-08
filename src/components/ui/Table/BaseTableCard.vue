<template>
  <BaseCard
    :padding-size="CardPaddingSize.S"
    class="table-card"
  >
    <slot />
  </BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/ui/Card/BaseCard.vue'
import { CardPaddingSize } from '@/global/types/ui/card/CardPaddingSize'
</script>

<style lang="scss" scoped>
.table-card {
	display: flex;
	flex-direction: column;
	gap: $indent-xs;
}
</style>
