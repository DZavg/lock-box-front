<template>
	<div class="dropdown">
		<div class="dropdown__head">
			<p><slot name="title"></slot></p>
			<slot name="button" :click="$emit('onClick')"></slot>
		</div>
		<div v-if="isActive" class="dropdown__body">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	isActive: boolean
}

withDefaults(defineProps<Props>(), {
	isActive: false,
})

defineEmits<{
	(e: 'onClick'): void
}>()
</script>

<style lang="scss" scoped>
.dropdown {
	&__head {
		word-break: break-word;
	}
}
</style>
