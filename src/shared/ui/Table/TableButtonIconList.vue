<template>
	<div class="table-button-icon-list">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.table-button-icon-list {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: $indent-s;

	&:deep(button),
	&:deep(a) {
		padding: 0 $indent-s;
	}
}
</style>
