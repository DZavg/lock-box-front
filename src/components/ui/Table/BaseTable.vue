<template>
  <div class="table">
    <table class="table__content">
      <slot>
        <BaseTableHead>
          <slot name="head" />
        </BaseTableHead>
        <BaseTableBody>
          <slot name="body" />
        </BaseTableBody>
      </slot>
    </table>
  </div>
</template>

<script lang="ts" setup>
import BaseTableBody from '@/components/ui/Table/BaseTableBody.vue'
import BaseTableHead from '@/components/ui/Table/BaseTableHead.vue'
</script>

<style lang="scss" scoped>
.table {
	@include scrollbar;

	overflow: auto hidden;

	&__content {
		width: 100%;
		border-collapse: collapse;
		color: $color-white;
	}
}
</style>
