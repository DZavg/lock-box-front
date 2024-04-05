<template>
	<AuthPageWrapper class="auth-page container-s">
		<LogoWithDescription />
		<AuthTabs />
	</AuthPageWrapper>
</template>

<script lang="ts" setup>
import LogoWithDescription from '@/shared/ui/Logo/LogoWithDescription.vue'
import AuthTabs from '@/widgets/auth/tabs/ui/AuthTabs.vue'
import AuthPageWrapper from '@/entities/auth/page-wrapper/ui/AuthPageWrapper.vue'
</script>

<style lang="scss" scoped></style>
