<template>
  <BaseButtonIcon
    :icon="iconEdit"
    :size="size"
  />
</template>

<script lang="ts" setup>
import iconEdit from '@/shared/images/svg/icon-edit.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	size?: IconSize
}

withDefaults(defineProps<Props>(), {
	size: IconSize.M,
})
</script>

<style lang="scss" scoped></style>
