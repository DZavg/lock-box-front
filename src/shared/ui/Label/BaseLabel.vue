<template>
	<span v-if="label" class="label caption_p">{{ label }}</span>
</template>

<script lang="ts" setup>
interface Props {
	label: string
}

withDefaults(defineProps<Props>(), {
	label: '',
})
</script>

<style lang="scss" scoped>
.label {
	color: $color-gray-secondary;
	user-select: none;
}
</style>
