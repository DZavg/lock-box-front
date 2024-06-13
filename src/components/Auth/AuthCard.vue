<template>
  <BaseCard>
    <h1 class="h1-indent">
      {{ title }}
    </h1>
    <slot />
  </BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/ui/Card/BaseCard.vue'

interface Props {
	title: string
}

withDefaults(defineProps<Props>(), {
	title: '',
})
</script>

<style lang="scss" scoped></style>
