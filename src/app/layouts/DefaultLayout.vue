<template>
	<div class="layout">
		<TheHeader />
		<div class="inner container-m">
			<RouterView />
		</div>
		<TheFooter />
	</div>
</template>

<script lang="ts" setup>
import TheFooter from '@/shared/ui/Footer/TheFooter.vue'
import TheHeader from '@/widgets/header/ui/TheHeader.vue'
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	padding: $indent-s 0;
}

.inner {
	flex: 1 0 auto;
}
</style>
