<template>
	<div :class="{ ['card_padding-size_' + paddingSize]: !!paddingSize }" class="card">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
import { CardPaddingSize } from '@/shared/types/Card/CardPaddingSize'

interface Props {
	paddingSize?: CardPaddingSize
}

withDefaults(defineProps<Props>(), {
	paddingSize: CardPaddingSize.Medium,
})
</script>

<style lang="scss" scoped>
.card {
	border: 1px solid $color-dark-third;
	border-radius: $border-radius-s;
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
}
</style>
