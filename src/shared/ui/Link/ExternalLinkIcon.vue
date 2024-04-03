<template>
	<BaseLinkIcon :icon="iconExternalLink" :link="link" target="_blank" />
</template>

<script lang="ts" setup>
import iconExternalLink from '@/shared/images/svg/icon-external-link.svg'
import BaseLinkIcon from '@/shared/ui/Link/BaseLinkIcon.vue'

interface Props {
	link: string | object
}

withDefaults(defineProps<Props>(), {
	link: '',
})
</script>

<style lang="scss" scoped></style>
