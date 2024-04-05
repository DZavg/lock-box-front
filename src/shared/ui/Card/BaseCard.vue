<template>
	<div
		:class="{
			['card_padding-size_' + paddingSize]: !!paddingSize,
			['card_border-size_' + borderSize]: !!borderSize,
		}"
		class="card"
	>
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
import { CardPaddingSize } from '@/shared/model/types/Card/CardPaddingSize'
import { CardBorderSize } from '@/shared/model/types/Card/CardBorderSize'

interface Props {
	paddingSize?: CardPaddingSize
	borderSize?: CardBorderSize
}

withDefaults(defineProps<Props>(), {
	paddingSize: CardPaddingSize.Medium,
	borderSize: CardBorderSize.Medium,
})
</script>

<style lang="scss" scoped>
.card {
	$borderWidth: 1px;
	border: $borderWidth solid $color-dark-third;
	background-color: $color-dark-primary;
	color: $color-white;

	&_padding-size {
		&_small {
			padding: calc($indent-s - $borderWidth);
		}

		&_medium {
			padding: calc($indent-xl - $borderWidth);

			@media screen and (max-width: 768px) {
				padding: calc($indent-m - $borderWidth);
			}
		}
	}

	&_border-size {
		&_small {
			border-radius: $border-radius-s;
		}

		&_medium {
			border-radius: $border-radius-m;
		}
	}
}
</style>
