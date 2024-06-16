<template>
  <ContentCentering class="recovery-password-success-msg">
    <BaseImage
      :image="{
        src: 'https://placehold.co/168x168/orange/white',
        alt: title,
        title: title,
      }"
      class="recovery-password-success-msg__image"
    />
    <h1 class="h1-indent">
      {{ title }}
    </h1>
    <p class="recovery-password-success-msg__text">
      Сообщение было отправлено на ваш адрес {{ email }}. Следуйте инструкциям в сообщении, чтобы
      сбросить пароль
    </p>
    <BaseLinkButton
      class="recovery-password-success-msg__button"
      link="/"
    >
      Готово
    </BaseLinkButton>
  </ContentCentering>
</template>

<script lang="ts" setup>
import BaseLinkButton from '@/components/ui/Link/BaseLinkButton.vue'
import ContentCentering from '@/components/ui/Content/ContentCentering.vue'
import BaseImage from '@/components/ui/Image/BaseImage.vue'

interface Props {
	email: string
}

withDefaults(defineProps<Props>(), {
	email: '',
})

const title = 'Сообщение для сброса пароля отправлено'
</script>

<style lang="scss" scoped>
.recovery-password-success-msg {
	&__image {
		max-width: 168px;
		margin-bottom: $indent-m;

		@media screen and (max-width: 768px) {
			max-width: 128px;
			margin-bottom: $indent-s;
		}
	}

	&__text {
		margin-bottom: $indent-m;

		@media screen and (max-width: 768px) {
			margin-bottom: $indent-xl;
		}
	}

	&__button {
		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}
}
</style>
