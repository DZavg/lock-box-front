<template>
  <BaseLinkIcon
    :icon="iconExternalLink"
    :link="link"
    :size="size"
    target="_blank"
  />
</template>

<script lang="ts" setup>
import iconExternalLink from '@/assets/images/svg/icon-external-link.svg'
import BaseLinkIcon from '@/components/ui/Link/BaseLinkIcon.vue'
import { IconSize } from '@/model/types/Icon/IconSize'

interface Props {
	link: string
	size?: IconSize
}

withDefaults(defineProps<Props>(), {
	link: '',
	size: IconSize.M,
})
</script>

<style lang="scss" scoped></style>
