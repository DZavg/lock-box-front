<template>
  <BaseLinkIcon
    :icon="iconEyeOpen"
    :link="link"
    :size="size"
  />
</template>

<script lang="ts" setup>
import iconEyeOpen from '@/shared/images/svg/icon-eye-open.svg'
import BaseLinkIcon from '@/components/ui/Link/BaseLinkIcon.vue'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	link: string | object
	size?: IconSize
}

withDefaults(defineProps<Props>(), {
	link: '',
	size: IconSize.M,
})
</script>

<style lang="scss" scoped></style>
