<template>
  <header class="header container-m">
    <div class="header__wrapper">
      <RouterLink
        :to="{ name: RouteName.Projects }"
        title="Lock Box"
      >
        <svg class="header__logo">
          <use :href="iconLogo + '#icon'" />
        </svg>
      </RouterLink>
      <UserDropdown />
    </div>
  </header>
</template>

<script lang="ts" setup>
import iconLogo from '/images/svg/icon-logo.svg'
import UserDropdown from '@/components/User/UserDropdown.vue'
import { RouteName } from '@/router/RouteName'
</script>

<style lang="scss" scoped>
.header {
	&__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: $indent-s $indent-m;
		border-radius: $border-radius-m;
		background-color: $color-dark-secondary;
		gap: $indent-2xs $indent-s;

		@media screen and (max-width: 480px) {
			padding: $indent-s;
		}
	}

	&__logo {
		display: block;
		width: 128px;
		height: 20px;
		fill: $color-white;

		@media screen and (max-width: 480px) {
			width: 99px;
			height: 16px;
		}
	}
}
</style>
