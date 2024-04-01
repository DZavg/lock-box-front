<template>
	<div class="auth-page container-s">
		<LogoWithDescription />
		<AuthTabs />
	</div>
</template>

<script lang="ts" setup>
import LogoWithDescription from '@/shared/ui/Logo/LogoWithDescription.vue'
import AuthTabs from '@/widgets/Auth/ui/AuthTabs.vue'
</script>

<style lang="scss" scoped>
.auth-page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: $indent-l;
}
</style>
