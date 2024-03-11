<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.card {
	padding: $indent-s;
	border: 1px solid $color-dark-third;
	border-radius: $border-radius-s;
	background-color: $color-dark-primary;
	color: $color-white;
}
</style>
