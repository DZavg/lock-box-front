<template>
  <BaseButtonIcon
    :icon="iconClose"
    :size="size"
  />
</template>

<script lang="ts" setup>
import iconClose from '/images/svg/icon-close.svg'
import BaseButtonIcon from '@/components/ui/Button/BaseButtonIcon.vue'
import { IconSize } from '@/global/types/ui/icon/IconSize'

interface Props {
	size?: IconSize
}

defineProps<Props>()
</script>

<style lang="scss" scoped></style>
