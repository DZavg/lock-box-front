<template>
  <BaseCard class="create-password-form">
    <h1 class="h1-indent">
      Придумайте пароль
    </h1>
    <BaseForm
      class="create-password-form__element"
      @submit="changePassword"
    >
      <div class="create-password-form__wrapper">
        <PasswordInput
          v-model="form.password"
          :error="errors.password"
        />
        <CodeInput
          v-model="form.code"
          :error="errors.code"
        />
      </div>
      <BaseButton
        :loading="isLoading"
        @on-click="changePassword"
      >
        Подтвердить
      </BaseButton>
    </BaseForm>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import BaseForm from '@/components/ui/Form/BaseForm.vue'
import BaseCard from '@/components/ui/Card/BaseCard.vue'
import PasswordInput from '@/components/ui/Input/PasswordInput.vue'
import CodeInput from '@/components/ui/Input/CodeInput.vue'
import useRequest from '@/composables/useRequest'
import { useAuthStore } from '@/stores/auth'
import type { RecoveryPasswordDto } from '@/api/auth/dto/recovery-password.dto'
import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import { RouteName } from '@/router/RouteName'

interface Props {
	email: string
}

const props = withDefaults(defineProps<Props>(), {
	email: '',
})

const form: Ref<RecoveryPasswordDto> = ref({
	email: props.email,
	code: '',
	password: '',
})

const { execute, errors, isLoading } = useRequest()
const router = useRouter()

const authStore = useAuthStore()
const { recoveryPassword } = authStore

const changePassword = async () => {
	await execute(async () => {
		const response = await recoveryPassword(form.value)
		await router.push(RouteName.Auth)
		return response
	})
}
</script>

<style scoped lang="scss">
.create-password-form {
	width: 100%;

	&__element {
		display: flex;
		flex-direction: column;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		margin-bottom: $indent-xl;
		gap: $indent-s;

		@media screen and (max-width: 768px) {
			margin-bottom: $indent-m;
			gap: $indent-xs;
		}
	}
}
</style>
