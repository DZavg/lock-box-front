<template>
	<div class="auth-page">
		<LogoWithDescription />
		<AuthTabs class="container-s" />
	</div>
</template>

<script lang="ts" setup>
import LogoWithDescription from '@/shared/ui/Logo/LogoWithDescription.vue'
import AuthTabs from '@/widgets/ui/Auth/AuthTabs.vue'
</script>

<style lang="scss" scoped>
.auth-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: $indent-l;
}
</style>
