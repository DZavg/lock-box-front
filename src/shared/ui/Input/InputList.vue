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

	@media screen and (max-width: 768px) {
		gap: $indent-xs;
	}
}
</style>
