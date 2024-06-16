<script lang="ts" setup>
import { RouterView } from 'vue-router'
import BaseOpacityTransition from '@/components/ui/Transition/BaseOpacityTransition.vue'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <BaseOpacityTransition>
      <component
        :is="Component"
        :key="route.path"
      />
    </BaseOpacityTransition>
  </router-view>
</template>

<style lang="scss">
@import '@/assets/styles/main';
</style>
