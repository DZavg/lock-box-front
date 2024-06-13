<template>
  <AuthPageWrapper class="password-recovery-page container-s">
    <LogoWithDescription v-if="!email" />
    <RecoveryPasswordForm
      v-if="!email"
      @reset-password="assignEmailValue"
    />
    <RecoveryPasswordSuccessMessage
      v-else
      :email="email"
    />
  </AuthPageWrapper>
</template>

<script lang="ts" setup>
import RecoveryPasswordForm from '@/widgets/recovery-password/form/ui/RecoveryPasswordForm.vue'
import LogoWithDescription from '@/components/ui/Logo/LogoWithDescription.vue'
import RecoveryPasswordSuccessMessage from '@/widgets/recovery-password/success-message/ui/RecoveryPasswordSuccessMessage.vue'
import { ref, type Ref } from 'vue'
import AuthPageWrapper from '@/components/Auth/AuthPageWrapper.vue'

const email: Ref<string> = ref('')

const assignEmailValue = (value: string) => {
	email.value = value
}
</script>

<style lang="scss" scoped></style>
