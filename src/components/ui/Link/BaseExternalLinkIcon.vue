<template>
  <a
    :href="link"
    class="link-icon"
    target="_blank"
    v-bind="$attrs"
  >
    <BaseIcon
      :icon="icon"
      :size="size"
    />
  </a>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/ui/Icon/BaseIcon.vue'
import { IconSize } from '@/global/types/ui/icon/IconSize'

interface Props {
	link: string
	icon: string
	size?: IconSize
}

withDefaults(defineProps<Props>(), {
	link: '',
	icon: '',
	size: IconSize.M,
})
</script>

<style scoped lang="scss">
.link-icon {
	@include button-icon;
}
</style>
