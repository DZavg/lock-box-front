<template>
  <BaseButtonIcon
    :icon="iconCopy"
    :size="size"
  />
</template>

<script lang="ts" setup>
import iconCopy from '@/assets/images/svg/icon-copy.svg'
import BaseButtonIcon from '@/components/ui/Button/BaseButtonIcon.vue'
import { IconSize } from '@/global/types/ui/icon/IconSize'

interface Props {
	size?: IconSize
}

withDefaults(defineProps<Props>(), {
	size: IconSize.M,
})
</script>

<style lang="scss" scoped></style>
