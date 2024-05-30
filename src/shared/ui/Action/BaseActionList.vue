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

	@include media-max-width-tablet {
		gap: $indent-xl;
	}

	@include media-max-width-mobile {
		gap: $indent-m;
	}
}
</style>
