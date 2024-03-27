<template>
	<div class="recovery-password-success-msg">
		<div class="recovery-password-success-msg__image-wrapper">
			<img
				alt="Сообщение для сброса пароля отправлено"
				class="recovery-password-success-msg__image"
				height="168"
				src="https://placehold.co/168x168/orange/white"
				width="168"
			/>
		</div>
		<h1 class="h1-title">Сообщение для сброса пароля отправлено</h1>
		<p class="recovery-password-success-msg__text">
			Сообщение было отправлено на ваш адрес {{ email }}. Следуйте инструкциям в сообщении, чтобы
			сбросить пароль
		</p>
		<BaseLinkButton class="recovery-password-success-msg__button" link="/">Готово </BaseLinkButton>
	</div>
</template>

<script lang="ts" setup>
import BaseLinkButton from '@/shared/ui/Link/BaseLinkButton.vue'

interface Props {
	email: string
}

withDefaults(defineProps<Props>(), {
	email: '',
})
</script>

<style lang="scss" scoped>
.recovery-password-success-msg {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1 0 auto;
	text-align: center;

	&__image-wrapper {
		max-width: 160px;
		margin-bottom: $indent-m;

		@media screen and (max-width: 475px) {
			max-width: 128px;
			margin-bottom: $indent-s;
		}
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	&__text {
		margin-bottom: $indent-m;

		@media screen and (max-width: 475px) {
			margin-bottom: $indent-xl;
		}
	}

	&__button {
		@media screen and (max-width: 475px) {
			width: 100%;
		}
	}
}
</style>
