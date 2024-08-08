<template>
  <CenteredTextWithImage
    :image="{
      src: emptyImage,
      alt: text,
      title: text,
    }"
    :text="text"
  />
</template>

<script setup lang="ts">
import CenteredTextWithImage from '@/components/ui/Centered/CenteredTextWithImage.vue'
import emptyImage from '/images/empty.webp'

interface Props {
	text: string
}

withDefaults(defineProps<Props>(), {
	text: '',
})
</script>

<style scoped lang="scss"></style>
