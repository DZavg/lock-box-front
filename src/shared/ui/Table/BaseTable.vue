<template>
	<div class="table">
		<table class="table__content">
			<slot></slot>
		</table>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.table {
	color: $color-white;
	&__content {
		width: 100%;
		border-collapse: collapse;
	}
}
</style>
