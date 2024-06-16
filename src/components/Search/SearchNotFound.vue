<template>
  <ContentCentering class="search-not-found container-s">
    <BaseImage
      class="search-not-found__image"
      :image="{
        src: 'https://placehold.co/168x168/orange/white',
        alt: text,
        title: text,
      }"
    />
    <p class="h1">
      {{ text }}
    </p>
  </ContentCentering>
</template>

<script setup lang="ts">
import ContentCentering from '@/components/ui/Content/ContentCentering.vue'
import BaseImage from '@/components/ui/Image/BaseImage.vue'

const text = 'Сожалеем, но ничего не найдено'
</script>

<style scoped lang="scss">
.search-not-found {
	padding: $indent-2xl 0 0 0;

	@media screen and (max-width: 768px) {
		padding: $indent-s 0 0 0;
	}

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
