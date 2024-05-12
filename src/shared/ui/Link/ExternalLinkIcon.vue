<template>
	<BaseLinkIcon :icon="iconExternalLink" :link="link" :size="iconSize" target="_blank" />
</template>

<script lang="ts" setup>
import iconExternalLink from '@/shared/images/svg/icon-external-link.svg'
import BaseLinkIcon from '@/shared/ui/Link/BaseLinkIcon.vue'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	link: string | object
	iconSize?: IconSize
}

withDefaults(defineProps<Props>(), {
	link: '',
	iconSize: IconSize.M,
})
</script>

<style lang="scss" scoped></style>
