<template>
	<div class="auth-page-wrapper">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.auth-page-wrapper {
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: $indent-l;
}
</style>
