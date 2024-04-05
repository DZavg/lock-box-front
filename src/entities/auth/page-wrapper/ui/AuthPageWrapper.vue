<template>
	<div class="auth-page-wrapper">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.auth-page-wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: $indent-l;
}
</style>
