<template>
	<div class="option" :class="{ ['option--active']: isActive }">
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
	padding: 12px $indent-s;
	border-radius: $border-radius-xs;
	transition: background-color 0.1s ease-in;
	cursor: pointer;

	&--active,
	&:hover,
	&:focus {
		background-color: $color-dark-secondary;
	}
}
</style>
