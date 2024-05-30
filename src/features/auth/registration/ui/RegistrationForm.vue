<template>
	<BaseForm class="registration-form">
		<InputList class="registration-form__inputs">
			<BaseInput label="Имя" name="name" placeholder="Иванов Иван" />
			<EmailInput />
			<PasswordInput />
			<PasswordInput label="Повтор пароля" name="password_repeat" />
		</InputList>
		<BaseButton>Зарегистрироваться</BaseButton>
	</BaseForm>
</template>

<script lang="ts" setup>
import BaseForm from '@/shared/ui/Form/BaseForm.vue'
import EmailInput from '@/shared/ui/Input/EmailInput.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import PasswordInput from '@/shared/ui/Input/PasswordInput.vue'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'
import InputList from '@/shared/ui/Input/InputList.vue'
</script>

<style lang="scss" scoped>
.registration-form {
	display: flex;
	flex-direction: column;

	&__inputs {
		margin-bottom: $indent-xl;

		@include media-max-width-mobile {
			margin-bottom: $indent-m;
		}
	}
}
</style>
