<template>
	<div class="content-centering">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.content-centering {
	display: flex;
	flex: 1 0 auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
}
</style>
