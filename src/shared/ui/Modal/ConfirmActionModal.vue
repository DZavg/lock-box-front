<template>
	<BaseModal class="confirm-action-modal">
		<p class="h2 modal-h1-title confirm-action-modal__title">{{ title }}</p>
		<p v-if="text" class="confirm-action-modal__text">{{ text }}</p>
		<div class="confirm-action-modal__button-list">
			<BaseButton @click="$emit('onClose')" :background="ButtonBackground.Border"
				>Отменить</BaseButton
			>
			<BaseButton @click="$emit('onConfirm')">{{ buttonConfirmText }}</BaseButton>
		</div>
	</BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/shared/ui/Modal/BaseModal.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import { ButtonBackground } from '@/shared/types/Button/ButtonBackground'

interface Props {
	title: string
	text?: string
	buttonConfirmText: string
}

withDefaults(defineProps<Props>(), {
	title: '',
	text: '',
	buttonConfirmText: '',
})

defineEmits<{
	(e: 'onClose'): void
	(e: 'onConfirm'): void
}>()
</script>

<style lang="scss">
.confirm-action-modal {
	&[data-v-c98d2ce4] {
		max-width: 612px;

		@media screen and (max-width: 768px) {
			max-width: none;
		}
	}

	&__title {
		word-break: break-word;
	}

	&__text {
		word-break: break-word;
	}

	&__button-list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: $indent-m;
		margin-top: $indent-l;
	}
}
</style>
