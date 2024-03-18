<template>
	<div class="option-list">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.option-list {
	@include scrollbar();
	display: flex;
	flex-direction: column;
	gap: $indent-2xs;
	max-height: 196px;
	padding-right: $indent-2xs;
	overflow: hidden auto;
	overscroll-behavior: contain;
}
</style>
