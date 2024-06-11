<template>
	<transition name="opacity-transition">
		<slot></slot>
	</transition>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.opacity-transition-enter-active,
.opacity-transition-leave-active {
	transition: opacity 0.2s ease;
}

.opacity-transition-enter-from,
.opacity-transition-leave-to {
	opacity: 0;
}
</style>
