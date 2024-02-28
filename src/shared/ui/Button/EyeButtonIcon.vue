<template>
	<BaseButtonIcon v-if="active" :icon="iconEyeOpen" size="16" />
	<BaseButtonIcon v-else :icon="iconEyeClose" size="16" />
</template>

<script lang="ts" setup>
import iconEyeClose from '@/shared/images/svg/icon-eye-close.svg'
import iconEyeOpen from '@/shared/images/svg/icon-eye-open.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'

interface Props {
	active: boolean
}

withDefaults(defineProps<Props>(), {
	active: false,
})
</script>

<style lang="scss" scoped></style>
