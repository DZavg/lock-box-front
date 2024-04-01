<template>
	<AuthPageWrapper class="auth-page container-s">
		<LogoWithDescription />
		<AuthTabs />
	</AuthPageWrapper>
</template>

<script lang="ts" setup>
import LogoWithDescription from '@/shared/ui/Logo/LogoWithDescription.vue'
import AuthTabs from '@/widgets/Auth/ui/AuthTabs.vue'
import AuthPageWrapper from '@/entities/Auth/ui/AuthPageWrapper.vue'
</script>

<style lang="scss" scoped></style>
