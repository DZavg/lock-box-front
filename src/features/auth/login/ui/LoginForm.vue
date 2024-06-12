<template>
  <BaseForm class="login-form">
    <InputList class="login-form__inputs">
      <EmailInput />
      <PasswordInput />
    </InputList>
    <BaseLink
      :link="{ name: RouteName.RecoveryPassword }"
      class="login-form__link"
    >
      Восстановить пароль
    </BaseLink>
    <BaseButton>Войти</BaseButton>
  </BaseForm>
</template>

<script lang="ts" setup>
import BaseForm from '@/shared/ui/Form/BaseForm.vue'
import EmailInput from '@/shared/ui/Input/EmailInput.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import PasswordInput from '@/shared/ui/Input/PasswordInput.vue'
import BaseLink from '@/shared/ui/Link/BaseLink.vue'
import InputList from '@/shared/ui/Input/InputList.vue'
import { RouteName } from '@/app/router/RouteName'
</script>

<style lang="scss" scoped>
.login-form {
	display: flex;
	flex-direction: column;

	&__inputs {
		margin-bottom: $indent-m;

		@media screen and (max-width: 768px) {
			margin-bottom: $indent-s;
		}
	}

	&__link {
		align-self: flex-end;
		margin-bottom: $indent-l;

		@media screen and (max-width: 768px) {
			margin-bottom: $indent-m;
		}
	}
}
</style>
