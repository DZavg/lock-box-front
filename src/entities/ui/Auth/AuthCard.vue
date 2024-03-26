<template>
	<BaseCard>
		<h1 class="h1-title">{{ title }}</h1>
		<slot></slot>
	</BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/shared/ui/Card/BaseCard.vue'

interface Props {
	title: string
}

withDefaults(defineProps<Props>(), {
	title: '',
})
</script>

<style lang="scss" scoped></style>
