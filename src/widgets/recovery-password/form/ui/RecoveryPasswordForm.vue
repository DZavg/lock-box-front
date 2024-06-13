<template>
  <AuthCard
    class="recovery-password-form"
    title="Восстановление пароля"
  >
    <BaseForm class="recovery-password-form__wrapper">
      <EmailInput v-model="form.email" />
      <BaseButton @click="resetPassword">
        Сбросить пароль
      </BaseButton>
    </BaseForm>
  </AuthCard>
</template>

<script lang="ts" setup>
import AuthCard from '@/components/Auth/AuthCard.vue'
import BaseForm from '@/components/ui/Form/BaseForm.vue'
import EmailInput from '@/components/ui/Input/EmailInput.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import { ref } from 'vue'

const form = ref({
	email: '',
})

const emits = defineEmits<{
	(e: 'resetPassword', email: string): void
}>()

const resetPassword = () => {
	emits('resetPassword', form.value.email)
}
</script>

<style lang="scss" scoped>
.recovery-password-form {
	width: 100%;

	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: $indent-xl;

		@media screen and (max-width: 768px) {
			gap: $indent-m;
		}
	}
}
</style>
