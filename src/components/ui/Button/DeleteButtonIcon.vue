<template>
  <BaseButtonIcon
    :icon="iconDelete"
    :size="size"
  />
</template>

<script lang="ts" setup>
import iconDelete from '@/shared/images/svg/icon-delete.svg'
import BaseButtonIcon from '@/components/ui/Button/BaseButtonIcon.vue'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	size?: IconSize
}

withDefaults(defineProps<Props>(), {
	size: IconSize.M,
})
</script>

<style lang="scss" scoped></style>
