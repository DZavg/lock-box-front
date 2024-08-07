<template>
  <div class="centered-content">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.centered-content {
	display: flex;
	flex: 1 0 auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
}
</style>
