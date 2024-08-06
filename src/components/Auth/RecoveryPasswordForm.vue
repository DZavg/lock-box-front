<template>
  <BaseCard class="recovery-password-form">
    <h1 class="h1-indent">
      Восстановление пароля
    </h1>
    <BaseForm
      class="recovery-password-form__wrapper"
      @submit="getCode"
    >
      <EmailInput
        v-model="email"
        :error="errors.email"
      />
      <BaseButton
        :loading="isLoading"
        @click="getCode"
      >
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
import { type Ref, ref } from 'vue'
import { useConfirmationCodeStore } from '@/stores/confirmationCode'
import useRequest from '@/composables/useRequest'

const { execute, errors, isLoading } = useRequest()
const confirmationCodeStore = useConfirmationCodeStore()
const { getOne } = confirmationCodeStore

const emits = defineEmits<{
	(e: 'resetPassword', email: string): void
}>()

const email: Ref<string> = ref('')

const getCode = () => {
	execute(async () => {
		const response = await getOne(email.value)
		emits('resetPassword', email.value)
		return response
	})
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
