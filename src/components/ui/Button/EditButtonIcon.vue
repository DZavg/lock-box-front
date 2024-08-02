<template>
  <BaseButtonIcon
    :icon="iconEdit"
    :size="size"
    title="Редактировать"
  />
</template>

<script lang="ts" setup>
import iconEdit from '@/assets/images/svg/icon-edit.svg'
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
