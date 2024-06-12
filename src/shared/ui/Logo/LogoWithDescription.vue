<template>
  <div class="logo-with-desc">
    <RouterLink to="/">
      <svg class="logo-with-desc__icon">
        <use :href="iconLogo + '#icon'" />
      </svg>
    </RouterLink>
    <p>Ваш надежный хранитель паролей</p>
  </div>
</template>

<script lang="ts" setup>
import iconLogo from '@/shared/images/svg/icon-logo.svg'
</script>

<style lang="scss" scoped>
.logo-with-desc {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: $indent-s;

	@media screen and (max-width: 768px) {
		gap: $indent-xs;
	}

	&__icon {
		width: 197px;
		height: 32px;
		fill: $color-white;

		@media screen and (max-width: 768px) {
			width: 148px;
			height: 24px;
		}
	}
}
</style>
