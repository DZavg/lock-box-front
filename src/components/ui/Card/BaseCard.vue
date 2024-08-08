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
import { CardPaddingSize } from '@/global/types/ui/card/CardPaddingSize'
import { BorderRadiusSize } from '@/global/types/ui/border/BorderRadiusSize'

interface Props {
	paddingSize?: CardPaddingSize
	borderRadius?: BorderRadiusSize
}

withDefaults(defineProps<Props>(), {
	paddingSize: CardPaddingSize.M,
	borderRadius: BorderRadiusSize.M,
})
</script>

<style lang="scss" scoped>
.card {
	$border-width: 1px;

	border: $border-width solid $color-dark-third;
	background-color: $color-dark-primary;
	color: $color-white;

	&_padding-size {
		&_s {
			padding: calc($indent-s - $border-width);
		}

		&_m {
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
