<template>
	<a v-if="isExternalLink" :href="'//' + link" class="link-icon" target="_blank" v-bind="$attrs">
		<BaseIcon :icon="icon" :size="size" />
	</a>
	<RouterLink v-else :target="target" :to="link" class="link-icon" v-bind="$attrs">
		<BaseIcon :icon="icon" :size="size" />
	</RouterLink>
</template>

<script lang="ts" setup>
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import { type HtmlLinkTarget } from '@/shared/model/types/Link/HtmlLinkTarget'
import useLink from '@/shared/model/composable/useLink'

interface Props {
	link: string | object
	icon: string
	target?: HtmlLinkTarget
	size?: string | number
}

const props = withDefaults(defineProps<Props>(), {
	link: '',
	icon: '',
	target: '_self',
	size: 24,
})

const isExternalLink = useLink(props.link)

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
