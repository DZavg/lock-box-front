<template>
	<AuthCard class="recovery-password-form" title="Восстановление пароля">
		<BaseForm class="recovery-password-form__wrapper">
			<EmailInput />
			<BaseButton>Сбросить пароль</BaseButton>
		</BaseForm>
	</AuthCard>
</template>

<script lang="ts" setup>
import AuthCard from '@/entities/ui/Auth/AuthCard.vue'
import BaseForm from '@/shared/ui/Form/BaseForm.vue'
import EmailInput from '@/shared/ui/Input/EmailInput.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
</script>

<style lang="scss" scoped>
.recovery-password-form {
	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: $indent-xl;

		@media screen and (max-width: 475px) {
			gap: $indent-m;
		}
	}
}
</style>
