<template>
	<div class="password-recovery-page container-s">
		<LogoWithDescription v-if="!email" />
		<RecoveryPasswordForm v-if="!email" @resetPassword="assignEmailValue" />
		<RecoveryPasswordSuccessMessage v-else :email="email" />
	</div>
</template>

<script lang="ts" setup>
import RecoveryPasswordForm from '@/widgets/RecoveryPassword/ui/RecoveryPasswordForm.vue'
import LogoWithDescription from '@/shared/ui/Logo/LogoWithDescription.vue'
import RecoveryPasswordSuccessMessage from '@/widgets/RecoveryPassword/ui/RecoveryPasswordSuccessMessage.vue'
import { ref, type Ref } from 'vue'

const email: Ref<string> = ref('')

const assignEmailValue = (value: string) => {
	email.value = value
}
</script>

<style lang="scss" scoped>
.password-recovery-page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: $indent-l;
}
</style>
