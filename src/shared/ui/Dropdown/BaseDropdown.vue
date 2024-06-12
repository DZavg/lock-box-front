<template>
  <div class="dropdown">
    <div class="dropdown__head">
      <slot name="title" />
      <slot
        name="button"
        :click="$emit('onClick')"
      />
    </div>
    <div
      v-if="isActive"
      class="dropdown__body"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
	isActive: boolean
}

withDefaults(defineProps<Props>(), {
	isActive: false,
})

defineEmits<{
	(e: 'onClick'): void
}>()
</script>

<style lang="scss" scoped>
.dropdown {
	&__head {
		word-break: break-word;
	}
}
</style>
