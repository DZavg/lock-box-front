<template>
	<p v-if="text" class="error caption_p">{{ text }}</p>
</template>

<script lang="ts" setup>
interface Props {
	text?: string
}

withDefaults(defineProps<Props>(), {
	text: '',
})
</script>

<style lang="scss" scoped>
.error {
	color: $color-error;
	word-break: break-word;
}
</style>
