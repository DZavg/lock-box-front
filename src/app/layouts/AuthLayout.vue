<template>
	<div class="layout">
		<div class="inner container">
			<RouterView />
		</div>
		<TheFooter />
	</div>
</template>

<script lang="ts" setup>
import TheFooter from '@/shared/ui/Footer/TheFooter.vue'
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 0 0 $indent-s 0;
}

.inner {
	flex: 1 0 auto;
}
</style>
