<template>
  <span class="button-loader">
    <BaseIcon
      :icon="iconLoading"
      :size="IconSize.S"
    />
    <span>Загрузка...</span>
  </span>
</template>

<script setup lang="ts">
import iconLoading from '@/assets/images/svg/icon-loading.svg'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import BaseIcon from '@/components/ui/Icon/BaseIcon.vue'
</script>

<style scoped lang="scss">
.button-loader {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: $indent-xs;
	pointer-events: none;

	svg {
		animation: rotate 4s linear infinite;
		fill: $color-white;
	}
}
</style>
