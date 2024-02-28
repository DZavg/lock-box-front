<template>
	<BaseButtonIcon v-if="active" :icon="iconEyeOpen" size="16" :icon-color="iconColor" />
	<BaseButtonIcon v-else :icon="iconEyeClose" size="16" :icon-color="iconColor" />
</template>

<script lang="ts" setup>
import iconEyeClose from '@/shared/images/svg/icon-eye-close.svg'
import iconEyeOpen from '@/shared/images/svg/icon-eye-open.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import { IconColor } from '@/shared/types/Icon/IconColor'

interface Props {
	active: boolean
	iconColor?: IconColor
}

withDefaults(defineProps<Props>(), {
	active: false,
	iconColor: IconColor.White,
})
</script>

<style lang="scss" scoped></style>
