<template>
	<BaseButton class="button-loading">
		<svg class="icon-16">
			<use :href="iconLoading + '#icon'" />
		</svg>
		<span>Загрузка...</span>
	</BaseButton>
</template>

<script lang="ts" setup>
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import iconLoading from '@/shared/images/svg/icon-loading.svg'
</script>

<style lang="scss" scoped>
.button-loading {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: $indent-xs;
	pointer-events: none;

	svg {
		animation: rotate 4s linear infinite;
		fill: $color-white;
	}
}
</style>
