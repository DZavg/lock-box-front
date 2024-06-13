<template>
  <span
    :style="{ width: size + 'px', height: size + 'px' }"
    class="point"
  />
</template>

<script lang="ts" setup>
interface Props {
	size?: number
}

withDefaults(defineProps<Props>(), {
	size: 12,
})
</script>

<style lang="scss" scoped>
.point {
	display: block;
	border-radius: 50%;
	background-color: $color-blue-primary;
}
</style>
