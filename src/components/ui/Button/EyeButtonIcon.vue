<template>
  <BaseButtonIcon
    v-if="active"
    :icon="iconEyeOpen"
    :icon-color="iconColor"
    :size="iconSize"
    title="Скрыть пароль"
  />
  <BaseButtonIcon
    v-else
    :icon="iconEyeClose"
    :icon-color="iconColor"
    :size="iconSize"
    title="Показать пароль"
  />
</template>

<script lang="ts" setup>
import iconEyeClose from '/images/svg/icon-eye-close.svg'
import iconEyeOpen from '/images/svg/icon-eye-open.svg'
import BaseButtonIcon from '@/components/ui/Button/BaseButtonIcon.vue'
import { Color } from '@/global/types/ui/color/Color'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import type { IconColor } from '@/global/types/ui/icon/IconColor'

interface Props {
	active?: boolean
	iconColor?: IconColor
	iconSize?: IconSize
}

withDefaults(defineProps<Props>(), {
	active: false,
	iconColor: Color.White,
	iconSize: IconSize.S,
})
</script>

<style lang="scss" scoped></style>
