<template>
	<footer class="footer container-m">
		<p class="footer__copyright caption_p">© {{ currentYear }} Techouse</p>
		<BaseLink :color="LinkColor.White" class="caption_p" link="/"
			>Политика конфиденциальности
		</BaseLink>
	</footer>
</template>

<script lang="ts" setup>
import BaseLink from '@/shared/ui/Link/BaseLink.vue'
import { LinkColor } from '@/shared/model/types/Link/LinkColor'

const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: $indent-s $indent-m;
	border-radius: $border-radius-m;
	background-color: $color-dark-secondary;
	color: $color-white;
	gap: $indent-2xs $indent-s;
}
</style>
