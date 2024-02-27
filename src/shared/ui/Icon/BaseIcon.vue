<template>
	<svg class="icon" :class="'icon-' + size">
		<use :href="icon + '#icon'" />
	</svg>
</template>

<script lang="ts" setup>
interface Props {
	icon: string
	size?: string | number
}

withDefaults(defineProps<Props>(), {
	icon: '',
	size: 24,
})
</script>

<style lang="scss" scoped>
.icon {
	fill: $color-white;
}
</style>
