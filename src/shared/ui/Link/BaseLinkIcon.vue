<template>
	<RouterLink :target="target" :to="link" class="link-icon">
		<BaseIcon :icon="icon" :size="size" />
	</RouterLink>
</template>

<script lang="ts" setup>
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import { type HtmlLinkTarget } from '@/shared/types/Link/HtmlLinkTarget'

interface Props {
	link: string | object
	icon: string
	target?: HtmlLinkTarget
	size?: string | number
}

withDefaults(defineProps<Props>(), {
	link: '',
	icon: '',
	target: '_self',
	size: 24,
})

defineEmits<{ (e: 'onClick'): void }>()
</script>

<style lang="scss" scoped>
.link-icon {
	line-height: 0;

	svg {
		transition: opacity 0.15s ease-in;
	}

	&:hover {
		svg {
			opacity: 0.7;
		}
	}
}
</style>
