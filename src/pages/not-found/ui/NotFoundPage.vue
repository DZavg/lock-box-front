<template>
	<ContentCentering class="not-found-page container-s">
		<div class="not-found-page__wrapper">
			<img
				alt="Не найдено"
				class="not-found-page__image"
				height="176"
				src="https://placehold.co/468x176/orange/white"
				width="468"
			/>
			<h1 class="not-found-page__title">Похоже мы не можем найти нужную вам страницу</h1>
			<BaseLinkButton :link="RouteName.Projects" class="not-found-page__link"
				>На главную
			</BaseLinkButton>
		</div>
	</ContentCentering>
</template>

<script lang="ts" setup>
import BaseLinkButton from '@/shared/ui/Link/BaseLinkButton.vue'
import { RouteName } from '@/app/router/RouteName'
import ContentCentering from '@/shared/ui/Content/ContentCentering.vue'
</script>

<style lang="scss" scoped>
.not-found-page {
	&__image {
		width: 100%;
		max-width: 468px;
		height: auto;
		margin-bottom: $indent-xl;

		@include media-max-width-mobile {
			margin-bottom: $indent-s;
		}
	}

	&__title {
		margin-bottom: $indent-xl;

		@include media-max-width-mobile {
			margin-bottom: $indent-m;
		}
	}

	&__link {
		@include media-max-width-mobile-xs {
			width: 100%;
		}
	}
}
</style>
