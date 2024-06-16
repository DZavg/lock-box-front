<template>
  <div class="image">
    <img
      class="image__item"
      :src="image.src"
      :alt="image?.alt || imageOptions?.alt"
      :title="image?.title"
      :width="imageOptions?.width"
      :height="imageOptions?.height"
    >
  </div>
</template>

<script lang="ts" setup>
import { type ImgHTMLAttributes } from 'vue'
import type { Image } from '@/global/types/api/image/Image'

interface Props {
	image: Image
	imageOptions?: ImgHTMLAttributes
}

withDefaults(defineProps<Props>(), {
	image: () => ({
		src: '',
		alt: '',
		title: '',
	}),
	imageOptions: () => ({
		width: '168',
		height: '168',
		alt: '',
	}),
})
</script>

<style lang="scss" scoped>
.image {
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;

	&__item {
		width: 100%;
		height: 100%;
		aspect-ratio: v-bind('imageOptions.width') / v-bind('imageOptions.height');
		object-fit: cover;
	}
}
</style>
