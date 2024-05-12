<template>
	<BaseLinkIcon :icon="iconExternalLink" :link="link" :size="iconSize" target="_blank" />
</template>

<script lang="ts" setup>
import iconExternalLink from '@/shared/images/svg/icon-external-link.svg'
import BaseLinkIcon from '@/shared/ui/Link/BaseLinkIcon.vue'

interface Props {
	link: string | object
	iconSize?: string | number
}

withDefaults(defineProps<Props>(), {
	link: '',
	iconSize: 24,
})
</script>

<style lang="scss" scoped></style>
