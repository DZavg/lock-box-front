<template>
  <button
    :disabled="disabled"
    class="button-icon"
    type="button"
    @click="!disabled && $emit('onClick')"
  >
    <BaseIcon
      :color="iconColor"
      :icon="icon"
      :size="size"
    />
  </button>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/ui/Icon/BaseIcon.vue'
import { Color } from '@/global/types/ui/color/Color'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import type { IconColor } from '@/global/types/ui/icon/IconColor'

interface Props {
	disabled?: boolean
	icon: string
	size?: IconSize
	iconColor?: IconColor
}

withDefaults(defineProps<Props>(), {
	disabled: false,
	icon: '',
	size: IconSize.M,
	iconColor: Color.White,
})

defineEmits<{ (e: 'onClick'): void }>()
</script>

<style lang="scss" scoped>
.button-icon {
	@include button-icon;
}
</style>
