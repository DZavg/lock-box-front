<template>
	<AuthPageWrapper class="password-recovery-page container-s">
		<LogoWithDescription v-if="!email" />
		<RecoveryPasswordForm v-if="!email" @resetPassword="assignEmailValue" />
		<RecoveryPasswordSuccessMessage v-else :email="email" />
	</AuthPageWrapper>
</template>

<script lang="ts" setup>
import RecoveryPasswordForm from '@/widgets/RecoveryPassword/ui/RecoveryPasswordForm.vue'
import LogoWithDescription from '@/shared/ui/Logo/LogoWithDescription.vue'
import RecoveryPasswordSuccessMessage from '@/widgets/RecoveryPassword/ui/RecoveryPasswordSuccessMessage.vue'
import { ref, type Ref } from 'vue'
import AuthPageWrapper from '@/entities/Auth/ui/AuthPageWrapper.vue'

const email: Ref<string> = ref('')

const assignEmailValue = (value: string) => {
	email.value = value
}
</script>

<style lang="scss" scoped></style>
