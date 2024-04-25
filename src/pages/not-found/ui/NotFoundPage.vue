<template>
	<AuthPageWrapper class="not-found-page container-s">
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
				>На главную</BaseLinkButton
			>
		</div>
	</AuthPageWrapper>
</template>

<script lang="ts" setup>
import BaseLinkButton from '@/shared/ui/Link/BaseLinkButton.vue'
import { RouteName } from '@/app/router/RouteName'
import AuthPageWrapper from '@/entities/auth/page-wrapper/ui/AuthPageWrapper.vue'
</script>

<style lang="scss" scoped>
.not-found-page {
	&__wrapper {
		display: flex;
		flex: 1 0 auto;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	&__image {
		width: 100%;
		max-width: 468px;
		height: auto;
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
		@media screen and (max-width: 475px) {
			width: 100%;
		}
	}
}
</style>
