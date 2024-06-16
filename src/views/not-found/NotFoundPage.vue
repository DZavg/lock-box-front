<template>
  <ContentCentering class="not-found-page container-s">
    <BaseImage
      class="not-found-page__image"
      :image="{
        src: 'https://placehold.co/468x176/orange/white',
        alt: 'Не найдено',
        title: 'Не найдено',
      }"
      :image-options="{ width: '468', height: '176' }"
    />
    <h1 class="not-found-page__title">
      Похоже мы не можем найти нужную вам страницу
    </h1>
    <BaseLinkButton
      :link="RouteName.Projects"
      class="not-found-page__link"
    >
      На главную
    </BaseLinkButton>
  </ContentCentering>
</template>

<script lang="ts" setup>
import BaseLinkButton from '@/components/ui/Link/BaseLinkButton.vue'
import { RouteName } from '@/router/RouteName'
import ContentCentering from '@/components/ui/Content/ContentCentering.vue'
import BaseImage from '@/components/ui/Image/BaseImage.vue'
</script>

<style lang="scss" scoped>
.not-found-page {
	&__image {
		max-width: 468px;
		margin-bottom: $indent-xl;

		@media screen and (max-width: 768px) {
			margin-bottom: $indent-s;
		}
	}

	&__title {
		margin-bottom: $indent-xl;

		@media screen and (max-width: 768px) {
			margin-bottom: $indent-m;
		}
	}

	&__link {
		@media screen and (max-width: 480px) {
			width: 100%;
		}
	}
}
</style>
