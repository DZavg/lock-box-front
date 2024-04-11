<template>
	<div ref="optionsList" class="option-list">
		<div class="option-list__wrapper">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue'

const optionsList: Ref<HTMLElement | null> = ref(null)

defineExpose({
	optionsList,
})
</script>

<style lang="scss" scoped>
.option-list {
	width: 100%;
	padding: $indent-2xs;
	border-radius: $border-radius-s;
	background-color: $color-dark-third;

	&__wrapper {
		@include scrollbar;

		display: flex;
		overflow: hidden auto;
		max-height: 196px;
		flex-direction: column;
		padding-right: $indent-2xs;
		gap: $indent-2xs;
		overscroll-behavior: contain;
	}
}
</style>
