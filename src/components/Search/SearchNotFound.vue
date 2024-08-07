<template>
  <CenteredContent class="search-not-found container-s">
    <BaseImage
      class="search-not-found__image"
      :image="{
        src: searchImage,
        alt: text,
        title: text,
      }"
    />
    <p class="h1">
      {{ text }}
    </p>
  </CenteredContent>
</template>

<script setup lang="ts">
import CenteredContent from '@/components/ui/Centered/CenteredContent.vue'
import BaseImage from '@/components/ui/Image/BaseImage.vue'
import searchImage from '@/assets/images/search.webp'

const text = 'Сожалеем, но ничего не найдено'
</script>

<style scoped lang="scss">
.search-not-found {
	&__image {
		max-width: 168px;
		margin-bottom: $indent-m;

		@media screen and (max-width: 768px) {
			max-width: 128px;
			margin-bottom: $indent-s;
		}
	}
}
</style>
