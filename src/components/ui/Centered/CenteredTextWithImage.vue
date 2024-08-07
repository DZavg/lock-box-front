<template>
  <CenteredContent class="centered-text-with-image container-s">
    <BaseImage
      class="centered-text-with-image__image"
      :image="image"
    />
    <p class="h1">
      {{ text }}
    </p>
  </CenteredContent>
</template>

<script setup lang="ts">
import BaseImage from '@/components/ui/Image/BaseImage.vue'
import CenteredContent from '@/components/ui/Centered/CenteredContent.vue'
import type { Image } from '@/global/types/api/image/Image'
import type { ImgHTMLAttributes } from 'vue'

interface Props {
	image: Image
	imageOptions?: ImgHTMLAttributes
	text: string
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
	text: '',
})
</script>

<style scoped lang="scss">
.centered-text-with-image {
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
