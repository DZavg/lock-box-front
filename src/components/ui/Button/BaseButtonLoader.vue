<template>
  <span class="button-loader">
    <LoadingIcon />
    <span>Загрузка...</span>
  </span>
</template>

<script setup lang="ts">
import LoadingIcon from '@/components/ui/Icon/LoadingIcon.vue'
</script>

<style scoped lang="scss">
.button-loader {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: $indent-xs;
	pointer-events: none;
}
</style>
