<template>
	<footer class="footer container">
		<p class="footer__copyright caption_p">© {{ currentYear }} Techouse</p>
		<BaseLink class="caption_p" :color="LinkColor.White">Политика конфиденциальности</BaseLink>
	</footer>
</template>

<script lang="ts" setup>
import BaseLink from '@/shared/ui/Link/BaseLink.vue'
import { LinkColor } from '@/shared/types/Link/LinkColor'

const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: $indent-2xs $indent-s;
	flex-wrap: wrap;
	padding: $indent-s $indent-m;
	color: $color-white;
	background-color: $color-dark-secondary;
	border-radius: $border-radius-m;
}
</style>
