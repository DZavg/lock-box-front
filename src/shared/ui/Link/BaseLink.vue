<template>
	<RouterLink :to="link" :target="target" class="link">
		<slot></slot>
	</RouterLink>
</template>

<script lang="ts" setup>
import { type HtmlLinkTarget } from '@/shared/types/Link/HtmlLinkTarget'

interface Props {
	link: string | object
	target?: HtmlLinkTarget
}

withDefaults(defineProps<Props>(), {
	link: '',
	target: '_self',
})
</script>

<style lang="scss" scoped>
.link {
	color: $color-blue-primary;
	cursor: pointer;
	transition: color 0.15s ease-in;
	user-select: none;

	&:hover,
	&:active {
		color: $color-blue-secondary;
	}
}
</style>
