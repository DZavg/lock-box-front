<template>
	<div class="table-card-list">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.table-card-list {
	display: flex;
	flex-direction: column;
	gap: $indent-xs;
}
</style>
