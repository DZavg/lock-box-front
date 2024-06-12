<template>
  <div class="table-group">
    <BaseTwoColumnGrid v-if="isMobile">
      <slot name="cards" />
    </BaseTwoColumnGrid>
    <BaseTable v-else>
      <template #body>
        <slot name="body" />
      </template>
      <template #head>
        <slot name="head" />
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/shared/ui/Table/BaseTable.vue'
import useScreen from '@/app/composable/useScreen'
import BaseTwoColumnGrid from '@/shared/ui/Grid/BaseTwoColumnGrid.vue'

const { isMobile } = useScreen()
</script>

<style scoped lang="scss"></style>
