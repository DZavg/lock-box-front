<template>
  <div class="layout">
    <TheHeader />
    <div class="inner container-m">
      <RouterView />
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import TheFooter from '@/components/ui/Footer/TheFooter.vue'
import TheHeader from '@/components/ui/Header/TheHeader.vue'
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	padding: $indent-s 0;
}

.inner {
	display: flex;
	flex: 1 0 auto;
}
</style>
