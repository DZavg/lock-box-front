<template>
	<RouterLink :to="link" class="button-link">
		<slot></slot>
	</RouterLink>
</template>

<script lang="ts" setup>
interface Props {
	link: string | object
}

withDefaults(defineProps<Props>(), {
	link: '',
})
</script>

<style lang="scss" scoped></style>
