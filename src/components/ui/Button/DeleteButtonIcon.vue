<template>
  <BaseButtonIcon
    :icon="iconDelete"
    :size="size"
    title="Удалить"
  />
</template>

<script lang="ts" setup>
import iconDelete from '@/assets/images/svg/icon-delete.svg'
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
