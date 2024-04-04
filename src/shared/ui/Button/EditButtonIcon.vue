<template>
	<BaseButtonIcon :icon="iconEdit" :size="iconSize" />
</template>

<script lang="ts" setup>
import iconEdit from '@/shared/images/svg/icon-edit.svg'
import BaseButtonIcon from '@/shared/ui/Button/BaseButtonIcon.vue'

interface Props {
	iconSize?: string | number
}

withDefaults(defineProps<Props>(), {
	iconSize: 24,
})
</script>

<style lang="scss" scoped></style>
