<template>
  <BaseForm
    class="registration-form"
    @submit="registration"
  >
    <InputList class="registration-form__inputs">
      <BaseInput
        v-model="form.username"
        label="Имя"
        name="username"
        :error="errors.username"
        placeholder="Иванов Иван"
      />
      <EmailInput
        v-model="form.email"
        :error="errors.email"
      />
      <PasswordInput
        v-model="form.password"
        :error="errors.password"
      />
    </InputList>
    <BaseButton
      :loading="isLoading"
      @on-click="registration"
    >
      Зарегистрироваться
    </BaseButton>
  </BaseForm>
</template>

<script lang="ts" setup>
import BaseForm from '@/components/ui/Form/BaseForm.vue'
import EmailInput from '@/components/ui/Input/EmailInput.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import PasswordInput from '@/components/ui/Input/PasswordInput.vue'
import BaseInput from '@/components/ui/Input/BaseInput.vue'
import InputList from '@/components/ui/Input/InputList.vue'
import useRequest from '@/composables/useRequest'
import { useAuthStore } from '@/stores/auth'
import { ref, type Ref } from 'vue'
import type { RegistrationDto } from '@/api/auth/dto/registration.dto'
import { AuthTabsName } from '@/global/types/ui/auth/AuthTabsName'

const form: Ref<RegistrationDto> = ref({
	username: '',
	email: '',
	password: '',
})

const emits = defineEmits<{ (e: 'updateActiveTab', name: AuthTabsName): void }>()

const { execute, isLoading, errors } = useRequest()
const authStore = useAuthStore()
const { registration: fetchRegistration } = authStore

const registration = () => {
	execute(async () => {
		const response = await fetchRegistration(form.value)
		emits('updateActiveTab', AuthTabsName.Login)
		return response
	})
}
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
