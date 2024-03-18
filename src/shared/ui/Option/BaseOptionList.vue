<template>
	<div class="option-list">
		<div class="option-list__wrapper">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.option-list {
	width: 100%;
	padding: $indent-2xs;
	border-radius: $border-radius-s;
	background-color: $color-dark-third;

	&__wrapper {
		@include scrollbar();
		display: flex;
		flex-direction: column;
		gap: $indent-2xs;
		max-height: 196px;
		padding-right: $indent-2xs;
		overflow: hidden auto;
		overscroll-behavior: contain;
	}
}
</style>
