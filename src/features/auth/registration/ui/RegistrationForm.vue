<template>
  <BaseForm class="registration-form">
    <InputList class="registration-form__inputs">
      <BaseInput
        label="Имя"
        name="name"
        placeholder="Иванов Иван"
      />
      <EmailInput />
      <PasswordInput />
      <PasswordInput
        label="Повтор пароля"
        name="password_repeat"
      />
    </InputList>
    <BaseButton>Зарегистрироваться</BaseButton>
  </BaseForm>
</template>

<script lang="ts" setup>
import BaseForm from '@/components/ui/Form/BaseForm.vue'
import EmailInput from '@/components/ui/Input/EmailInput.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import PasswordInput from '@/components/ui/Input/PasswordInput.vue'
import BaseInput from '@/components/ui/Input/BaseInput.vue'
import InputList from '@/components/ui/Input/InputList.vue'
</script>

<style lang="scss" scoped>
.registration-form {
	display: flex;
	flex-direction: column;

	&__inputs {
		margin-bottom: $indent-xl;

		@media screen and (max-width: 768px) {
			margin-bottom: $indent-m;
		}
	}
}
</style>
