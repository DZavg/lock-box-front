<template>
  <AuthPageWrapper class="password-recovery-page container-s">
    <LogoWithDescription />
    <RecoveryPasswordForm
      v-if="!email"
      @reset-password="assignEmailValue"
    />
    <CreatePasswordForm
      v-else
      :email="email"
    />
  </AuthPageWrapper>
</template>

<script lang="ts" setup>
import RecoveryPasswordForm from '@/components/Auth/RecoveryPasswordForm.vue'
import LogoWithDescription from '@/components/ui/Logo/LogoWithDescription.vue'
import { ref, type Ref } from 'vue'
import AuthPageWrapper from '@/components/Auth/AuthPageWrapper.vue'
import CreatePasswordForm from '@/components/Auth/CreatePasswordForm.vue'

const email: Ref<string> = ref('')

const assignEmailValue = (value: string) => {
	email.value = value
}
</script>

<style lang="scss" scoped></style>
