<template>
  <BaseExternalLinkIcon
    :icon="iconExternalLink"
    :link="link"
    :size="size"
    target="_blank"
    title="Внешняя ссылка"
  />
</template>

<script lang="ts" setup>
import iconExternalLink from '@/assets/images/svg/icon-external-link.svg'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import BaseExternalLinkIcon from '@/components/ui/Link/BaseExternalLinkIcon.vue'

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
