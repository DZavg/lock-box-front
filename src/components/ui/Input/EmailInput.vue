<template>
  <BaseInput
    label="Электронная почта"
    name="email"
    :error="error"
    placeholder="ivan@gmail.com"
  />
</template>

<script lang="ts" setup>
import BaseInput from '@/components/ui/Input/BaseInput.vue'

interface Props {
	error?: string
}

withDefaults(defineProps<Props>(), {
	error: '',
})
</script>

<style lang="scss" scoped></style>
