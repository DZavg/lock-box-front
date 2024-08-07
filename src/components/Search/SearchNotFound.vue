<template>
  <CenteredTextWithImage
    :image="{
      src: searchImage,
      alt: text,
      title: text,
    }"
    :text="text"
  />
</template>

<script setup lang="ts">
import CenteredTextWithImage from '@/components/ui/Centered/CenteredTextWithImage.vue'
import searchImage from '@/assets/images/search.webp'

const text = 'Сожалеем, но ничего не найдено'
</script>

<style scoped lang="scss"></style>
