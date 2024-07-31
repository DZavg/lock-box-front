<template>
  <BaseInput
    label="Введите код"
    name="code"
    :error="error"
    placeholder="123456"
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
