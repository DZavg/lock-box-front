<template>
  <ConfirmActionModal
    class="confirm-delete-modal"
    :title="`Вы действительно хотите удалить: ${title} ?`"
    text="Эти данные нельзя будет вернуть"
    :button-confirm-text="buttonConfirmText"
    @on-confirm="$emit('onConfirm')"
    @on-close="$emit('onClose')"
  />
</template>

<script setup lang="ts">
import ConfirmActionModal from '@/components/ConfirmModals/ConfirmActionModal.vue'

interface Props {
	title: string
	buttonConfirmText: string
}

withDefaults(defineProps<Props>(), {
	title: '',
	buttonConfirmText: '',
})

defineEmits<{
	(e: 'onClose'): void
	(e: 'onConfirm'): void
}>()
</script>

<style scoped lang="scss"></style>
