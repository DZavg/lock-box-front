<template>
  <RouterLink
    :target="target"
    :to="link"
    class="link-icon"
    v-bind="$attrs"
  >
    <BaseIcon
      :icon="icon"
      :size="size"
    />
  </RouterLink>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/ui/Icon/BaseIcon.vue'
import { type HtmlLinkTarget } from '@/global/types/ui/link/HtmlLinkTarget'
import { IconSize } from '@/global/types/ui/icon/IconSize'

interface Props {
	link: string | object
	icon: string
	target?: HtmlLinkTarget
	size?: IconSize
}

withDefaults(defineProps<Props>(), {
	link: '',
	icon: '',
	target: '_self',
	size: IconSize.M,
})
</script>

<style lang="scss" scoped>
.link-icon {
	@include button-icon;
}
</style>
