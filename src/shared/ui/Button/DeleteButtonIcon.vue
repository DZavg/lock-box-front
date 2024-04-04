<template>
	<BaseButtonIcon :icon="iconDelete" :size="iconSize" />
</template>

<script lang="ts" setup>
import iconDelete from '@/shared/images/svg/icon-delete.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'

interface Props {
	iconSize?: string | number
}

withDefaults(defineProps<Props>(), {
	iconSize: 24,
})
</script>

<style lang="scss" scoped></style>
