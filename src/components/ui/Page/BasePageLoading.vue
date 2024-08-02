<template>
  <ContentCentering class="page-loading">
    <LoadingIcon
      :size="iconSize"
      :color="Color.BluePrimary"
    />
  </ContentCentering>
</template>

<script setup lang="ts">
import ContentCentering from '@/components/ui/Content/ContentCentering.vue'
import LoadingIcon from '@/components/ui/Loading/LoadingIcon.vue'
import { IconSize } from '@/global/types/ui/icon/IconSize'
import { Color } from '@/global/types/ui/color/Color'
import { computed } from 'vue'
import useScreen from '@/composables/useScreen'

const { isMobile } = useScreen()

const iconSize = computed(() => (isMobile.value ? IconSize.TwoXL : IconSize.ThreeXL))
</script>

<style scoped lang="scss"></style>
