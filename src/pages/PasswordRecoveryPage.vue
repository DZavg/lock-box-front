<template>
	<div class="password-recovery-page container-s">
		<LogoWithDescription />
		<RecoveryPasswordForm />
	</div>
</template>

<script lang="ts" setup>
import RecoveryPasswordForm from '@/widgets/ui/RecoveryPassword/RecoveryPasswordForm.vue'
import LogoWithDescription from '@/shared/ui/Logo/LogoWithDescription.vue'
</script>

<style lang="scss" scoped>
.password-recovery-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: $indent-l;
}
</style>
