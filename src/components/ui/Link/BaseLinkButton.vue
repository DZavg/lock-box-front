<template>
  <RouterLink
    :class="{ ['link-button_view_' + view]: view }"
    :target="target"
    :to="link"
    class="link-button"
  >
    <slot />
  </RouterLink>
</template>

<script lang="ts" setup>
import { ButtonView } from '@/global/types/ui/button/ButtonView'
import { type HtmlLinkTarget } from '@/global/types/ui/link/HtmlLinkTarget'

interface Props {
	link: string | object
	target?: HtmlLinkTarget
	view?: ButtonView
}

withDefaults(defineProps<Props>(), {
	link: '',
	target: '_self',
	view: ButtonView.Filled,
})
</script>

<style lang="scss" scoped>
.link-button {
	@include button;

	display: inline-block;

	&_view {
		&_filled {
			@include button-view-filled;
		}

		&_outlined {
			@include button-view-outlined;
		}
	}
}
</style>
