<template>
	<thead class="thead body_p_second">
		<slot></slot>
	</thead>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.thead {
	border-bottom: 1px solid $color-gray-primary;

	&:deep(th) {
		padding: $indent-s;
		text-overflow: ellipsis;
	}
}
</style>
