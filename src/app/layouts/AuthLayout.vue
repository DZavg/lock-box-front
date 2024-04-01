<template>
	<div class="layout">
		<div class="inner container-m">
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
	width: 100%;
	display: flex;
	justify-content: center;
	flex: 1 0 auto;
	padding-top: 184px;
	padding-bottom: 184px;

	@media screen and (max-width: 768px) {
		padding-top: $indent-xl;
		padding-bottom: $indent-m;
	}
}
</style>
