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
	min-height: 100vh;
	flex-direction: column;
	padding: 0 0 $indent-s 0;
}

.inner {
	display: flex;
	width: 100%;
	flex: 1 0 auto;
	justify-content: center;
	padding-top: 184px;
	padding-bottom: 184px;

	@include media-max-width-mobile {
		padding-top: $indent-xl;
		padding-bottom: $indent-m;
	}
}
</style>
