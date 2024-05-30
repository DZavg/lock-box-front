<template>
	<div class="input-list">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.input-list {
	display: flex;
	flex-direction: column;
	gap: $indent-s;

	@include media-max-width-mobile {
		gap: $indent-xs;
	}
}
</style>
