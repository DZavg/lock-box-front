<template>
  <BaseIcon
    class="loading-icon"
    :icon="iconLoading"
    :size="IconSize.S"
  />
</template>

<script setup lang="ts">
import iconLoading from '@/assets/images/svg/icon-loading.svg'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import BaseIcon from '@/components/ui/Icon/BaseIcon.vue'
</script>

<style scoped lang="scss">
.loading-icon {
	animation: rotate 4s linear infinite;
	fill: $color-white;
}
</style>
