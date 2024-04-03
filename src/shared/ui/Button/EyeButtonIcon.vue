<template>
	<BaseButtonIcon v-if="active" :icon="iconEyeOpen" :icon-color="iconColor" :size="iconSize" />
	<BaseButtonIcon v-else :icon="iconEyeClose" :icon-color="iconColor" :size="iconSize" />
</template>

<script lang="ts" setup>
import iconEyeClose from '@/shared/images/svg/icon-eye-close.svg'
import iconEyeOpen from '@/shared/images/svg/icon-eye-open.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import { IconColor } from '@/shared/types/Icon/IconColor'

interface Props {
	active?: boolean
	iconColor?: IconColor
	iconSize?: string | number
}

withDefaults(defineProps<Props>(), {
	active: false,
	iconColor: IconColor.White,
	iconSize: 16,
})
</script>

<style lang="scss" scoped></style>
