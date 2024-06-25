<template>
  <BaseForm
    class="login-form"
    @submit="signIn"
  >
    <InputList class="login-form__inputs">
      <EmailInput
        v-model="form.email"
        :error="errors.email"
      />
      <PasswordInput
        v-model="form.password"
        :error="errors.password"
      />
    </InputList>
    <BaseLink
      :link="{ name: RouteName.RecoveryPassword }"
      class="login-form__link"
    >
      Восстановить пароль
    </BaseLink>
    <BaseButton
      :loading="isLoading"
      @on-click="signIn"
    >
      Войти
    </BaseButton>
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
import { useAuthStore } from '@/stores/auth'
import useRequest from '@/composables/useRequest'
import { type Ref, ref } from 'vue'
import type { LoginDto } from '@/api/auth/dto/login.dto'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const form: Ref<LoginDto> = ref({
	email: '',
	password: '',
})

const { execute, isLoading, errors } = useRequest()
const authStore = useAuthStore()
const userStore = useUserStore()

const { login } = authStore
const { getInfo } = userStore

const router = useRouter()

const signIn = async () => {
	await execute(() => login(form.value))
	await getInfo()
	await router.push(RouteName.Projects)
}
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
