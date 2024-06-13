<template>
  <div class="action-list">
    <ExternalLinkIcon
      v-if="externalLink"
      :size="iconSize"
      :link="externalLink"
    />
    <EyeLinkIcon
      v-if="link"
      :link="link"
      :active="true"
      :size="iconSize"
    />
    <CopyButtonIcon
      v-if="copyLink"
      :size="iconSize"
      :link="copyLink"
    />
    <EditButtonIcon
      :size="iconSize"
      @on-click="$emit('onEdit')"
    />
    <DeleteButtonIcon
      :size="iconSize"
      @on-click="$emit('onDelete')"
    />
  </div>
</template>

<script lang="ts" setup>
import ExternalLinkIcon from '@/components/ui/Link/ExternalLinkIcon.vue'
import EditButtonIcon from '@/components/ui/Button/EditButtonIcon.vue'
import DeleteButtonIcon from '@/components/ui/Button/DeleteButtonIcon.vue'
import { computed } from 'vue'
import useScreen from '@/composable/useScreen'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import EyeLinkIcon from '@/components/ui/Link/EyeLinkIcon.vue'
import CopyButtonIcon from '@/components/ui/Button/CopyButtonIcon.vue'

interface Props {
	externalLink?: string
	link?: string | object
	copyLink?: string
}

withDefaults(defineProps<Props>(), {
	externalLink: '',
	link: '',
	copyLink: '',
})

defineEmits<{ (e: 'onEdit'): void; (e: 'onDelete'): void }>()

const { isMobile } = useScreen()

const iconSize = computed(() => (isMobile.value ? IconSize.S : IconSize.M))
</script>

<style lang="scss" scoped>
.action-list {
	display: flex;
	align-items: center;
	gap: $indent-2xl;

	@media screen and (max-width: 991px) {
		gap: $indent-xl;
	}

	@media screen and (max-width: 768px) {
		gap: $indent-m;
	}
}
</style>
