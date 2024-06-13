<template>
  <BaseCard class="recovery-password-form">
    <h1 class="h1-indent">
      Восстановление пароля
    </h1>
    <BaseForm class="recovery-password-form__wrapper">
      <EmailInput v-model="form.email" />
      <BaseButton @click="resetPassword">
        Сбросить пароль
      </BaseButton>
    </BaseForm>
  </BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/ui/Card/BaseCard.vue'
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
