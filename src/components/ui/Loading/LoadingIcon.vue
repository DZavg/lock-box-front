<template>
  <BaseIcon
    class="loading-icon"
    :icon="iconLoading"
    :color="color"
    :size="size"
  />
</template>

<script setup lang="ts">
import iconLoading from '@/assets/images/svg/icon-loading.svg'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import BaseIcon from '@/components/ui/Icon/BaseIcon.vue'
import { Color } from '@/global/types/ui/color/Color'
import type { IconColor } from '@/global/types/ui/icon/IconColor'

interface Props {
	size?: IconSize
	color?: IconColor
}

withDefaults(defineProps<Props>(), {
	size: IconSize.S,
	color: Color.White,
})
</script>

<style scoped lang="scss">
.loading-icon {
	animation: rotate 4s linear infinite;
}
</style>
