<template>
	<table class="table">
		<slot>
			<BaseTableHead>
				<slot name="head"></slot>
			</BaseTableHead>
			<BaseTableBody>
				<slot name="body"></slot>
			</BaseTableBody>
		</slot>
	</table>
</template>

<script lang="ts" setup>
import BaseTableBody from '@/shared/ui/Table/BaseTableBody.vue'
import BaseTableHead from '@/shared/ui/Table/BaseTableHead.vue'
</script>

<style lang="scss" scoped>
.table {
	width: 100%;
	border-collapse: collapse;
	color: $color-white;
}
</style>
