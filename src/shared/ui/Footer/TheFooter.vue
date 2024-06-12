<template>
  <footer class="footer container-m">
    <div class="footer__wrapper">
      <p class="footer__copyright caption_p">
        © {{ currentYear }} Techouse
      </p>
      <BaseLink
        :color="Color.White"
        class="caption_p"
        link="/"
      >
        Политика конфиденциальности
      </BaseLink>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import BaseLink from '@/shared/ui/Link/BaseLink.vue'
import { Color } from '@/shared/model/types/Color/Color'

const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
	&__wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: $indent-s $indent-m;
		border-radius: $border-radius-m;
		background-color: $color-dark-secondary;
		color: $color-white;
		gap: $indent-s;

		@media screen and (max-width: 480px) {
			padding: $indent-s;
		}
	}
}
</style>
