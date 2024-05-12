<template>
	<BaseButtonIcon :icon="iconDelete" :size="iconSize" />
</template>

<script lang="ts" setup>
import iconDelete from '@/shared/images/svg/icon-delete.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	iconSize?: IconSize
}

withDefaults(defineProps<Props>(), {
	iconSize: IconSize.M,
})
</script>

<style lang="scss" scoped></style>
