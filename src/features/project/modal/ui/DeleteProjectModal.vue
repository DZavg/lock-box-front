<template>
	<ConfirmActionModal
		class="delete-project-modal"
		:title="`Вы действительно хотите удалить: ${projectTitle} ?`"
		text="Эти данные нельзя будет вернуть"
		button-confirm-text="Удалить проект"
	/>
</template>

<script setup lang="ts">
import ConfirmActionModal from '@/features/confirm-action/ui/ConfirmActionModal.vue'

interface Props {
	projectTitle: string
}

withDefaults(defineProps<Props>(), {
	projectTitle: '',
})
</script>

<style scoped lang="scss"></style>
