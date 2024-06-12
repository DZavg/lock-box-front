<template>
  <BaseButtonIcon
    :icon="iconCopy"
    :size="size"
  />
</template>

<script lang="ts" setup>
import iconCopy from '@/shared/images/svg/icon-copy.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	size?: IconSize
	link: string
}

withDefaults(defineProps<Props>(), {
	size: IconSize.M,
	link: '',
})
</script>

<style lang="scss" scoped></style>
