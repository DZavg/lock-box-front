<template>
  <a
    v-if="isExternalLink"
    :href="'//' + link"
    class="link-icon"
    target="_blank"
    v-bind="$attrs"
  >
    <BaseIcon
      :icon="icon"
      :size="size"
    />
  </a>
  <RouterLink
    v-else
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
import { type HtmlLinkTarget } from '@/shared/model/types/Link/HtmlLinkTarget'
import useLink from '@/composable/useLink'
import { IconSize } from '@/shared/model/types/Icon/IconSize'

interface Props {
	link: string | object
	icon: string
	target?: HtmlLinkTarget
	size?: IconSize
}

const props = withDefaults(defineProps<Props>(), {
	link: '',
	icon: '',
	target: '_self',
	size: IconSize.M,
})

const { isExternalLink } = useLink(props.link)

defineEmits<{ (e: 'onClick'): void }>()
</script>

<style lang="scss" scoped>
.link-icon {
	@include button-icon;
}
</style>
