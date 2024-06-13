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
import BaseForm from '@/components/ui/Form/BaseForm.vue'
import EmailInput from '@/components/ui/Input/EmailInput.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import PasswordInput from '@/components/ui/Input/PasswordInput.vue'
import BaseLink from '@/components/ui/Link/BaseLink.vue'
import InputList from '@/components/ui/Input/InputList.vue'
import { RouteName } from '@/router/RouteName'
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
