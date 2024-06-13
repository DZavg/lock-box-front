<template>
  <tbody class="tbody">
    <slot />
  </tbody>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.tbody {
	&:deep(td) {
		padding: $indent-s;
	}
}
</style>
