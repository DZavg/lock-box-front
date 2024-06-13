<template>
  <BaseButtonIcon
    :icon="iconClose"
    :size="size"
  />
</template>

<script lang="ts" setup>
import iconClose from '@/assets/images/svg/icon-close.svg'
import BaseButtonIcon from '@/components/ui/Button/BaseButtonIcon.vue'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	size?: IconSize
}

defineProps<Props>()
</script>

<style lang="scss" scoped></style>
