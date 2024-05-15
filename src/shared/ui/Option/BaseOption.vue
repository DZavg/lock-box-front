<template>
	<div :class="{ ['option--active']: isActive }" class="option">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	isActive?: boolean
}

withDefaults(defineProps<Props>(), {
	isActive: false,
})
</script>

<style lang="scss" scoped>
.option {
	border-radius: $border-radius-xs;
	cursor: pointer;
	transition: background-color 0.1s ease-in;
	word-break: break-word;

	&--active,
	&:hover {
		background-color: $color-dark-secondary;
	}
}
</style>
