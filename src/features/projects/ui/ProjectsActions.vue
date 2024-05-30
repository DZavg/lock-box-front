<template>
	<div class="projects-actions">
		<BaseButton class="projects-actions__button">Добавить доступ</BaseButton>
		<SearchInput class="projects-actions__search" />
	</div>
</template>

<script lang="ts" setup>
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import SearchInput from '@/shared/ui/Input/SearchInput.vue'
</script>

<style lang="scss" scoped>
.projects-actions {
	display: flex;
	align-items: flex-start;
	gap: $indent-m;

	@include media-max-width-mobile {
		width: 100%;
		gap: $indent-s;
	}

	@include media-max-width-mobile-xs {
		flex-direction: column;
	}

	&__button {
		@include media-max-width-mobile-xs {
			width: 100%;
		}
	}

	&__search {
		min-width: 297px;

		@include media-max-width-mobile {
			min-width: initial;
		}

		@include media-max-width-mobile-xs {
			width: 100%;
		}
	}
}
</style>
