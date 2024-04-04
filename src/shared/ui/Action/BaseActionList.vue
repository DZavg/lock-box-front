<template>
	<div class="action-list">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.action-list {
	display: flex;
	align-items: center;
	gap: $indent-2xl;

	@media screen and (max-width: 475px) {
		gap: $indent-m;
	}
}
</style>
