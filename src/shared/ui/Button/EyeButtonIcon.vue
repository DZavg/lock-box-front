<template>
	<BaseButtonIcon v-if="active" :icon="iconEyeOpen" :icon-color="iconColor" :size="iconSize" />
	<BaseButtonIcon v-else :icon="iconEyeClose" :icon-color="iconColor" :size="iconSize" />
</template>

<script lang="ts" setup>
import iconEyeClose from '@/shared/images/svg/icon-eye-close.svg'
import iconEyeOpen from '@/shared/images/svg/icon-eye-open.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import { Color } from '@/shared/model/types/Color/Color'

interface Props {
	active?: boolean
	iconColor?: Color
	iconSize?: string | number
}

withDefaults(defineProps<Props>(), {
	active: false,
	iconColor: Color.White,
	iconSize: 16,
})
</script>

<style lang="scss" scoped></style>
