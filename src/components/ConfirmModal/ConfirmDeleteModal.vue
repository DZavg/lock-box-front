<template>
  <ConfirmActionModal
    class="confirm-delete-modal"
    :title="`Вы действительно хотите удалить: ${title} ?`"
    text="Эти данные нельзя будет вернуть"
    :button-confirm-text="buttonConfirmText"
  />
</template>

<script setup lang="ts">
import ConfirmActionModal from '@/components/ConfirmModal/ConfirmActionModal.vue'

interface Props {
	title: string
	buttonConfirmText: string
}

withDefaults(defineProps<Props>(), {
	title: '',
	buttonConfirmText: '',
})
</script>

<style scoped lang="scss"></style>
