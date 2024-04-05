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
	border: 1px solid $color-dark-third;
	background-color: $color-dark-primary;
	color: $color-white;

	&_padding-size {
		&_small {
			padding: $indent-s;
		}

		&_medium {
			padding: $indent-xl;

			@media screen and (max-width: 768px) {
				padding: $indent-m;
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
