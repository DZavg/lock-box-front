<template>
	<BaseLinkIcon :icon="iconEyeOpen" :link="link" />
</template>

<script lang="ts" setup>
import iconEyeOpen from '@/shared/images/svg/icon-eye-open.svg'
import BaseLinkIcon from '@/shared/ui/Link/BaseLinkIcon.vue'

interface Props {
	link: string | object
}

withDefaults(defineProps<Props>(), {
	link: '',
})
</script>

<style lang="scss" scoped></style>
