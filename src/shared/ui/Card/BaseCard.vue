<template>
  <div
    :class="{
      ['card_padding-size_' + paddingSize]: !!paddingSize,
      ['card_border-radius_' + borderRadius]: !!borderRadius,
    }"
    class="card"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { CardPaddingSize } from '@/shared/model/types/Card/CardPaddingSize'
import { BorderRadius } from '@/shared/model/types/Border/BorderRadius'

interface Props {
	paddingSize?: CardPaddingSize
	borderRadius?: BorderRadius
}

withDefaults(defineProps<Props>(), {
	paddingSize: CardPaddingSize.Medium,
	borderRadius: BorderRadius.M,
})
</script>

<style lang="scss" scoped>
.card {
	$border-width: 1px;

	border: $border-width solid $color-dark-third;
	background-color: $color-dark-primary;
	color: $color-white;

	&_padding-size {
		&_small {
			padding: calc($indent-s - $border-width);
		}

		&_medium {
			padding: calc($indent-xl - $border-width);

			@media screen and (max-width: 991px) {
				padding: calc($indent-l - $border-width);
			}

			@media screen and (max-width: 768px) {
				padding: calc($indent-m - $border-width);
			}
		}
	}

	&_border-radius {
		&_s {
			border-radius: $border-radius-s;
		}

		&_m {
			border-radius: $border-radius-m;
		}
	}
}
</style>
