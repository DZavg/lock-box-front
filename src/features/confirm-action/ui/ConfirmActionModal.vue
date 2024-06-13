<template>
  <BaseModal
    :text="text"
    :title="title"
    class="confirm-action-modal"
    @on-close="$emit('onClose')"
  >
    <div class="confirm-action-modal__button-list">
      <BaseButton
        :view="ButtonView.Outlined"
        @click="$emit('onClose')"
      >
        Отменить
      </BaseButton>
      <BaseButton @click="$emit('onConfirm')">
        {{ buttonConfirmText }}
      </BaseButton>
    </div>
  </BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/components/ui/Modal/BaseModal.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import { ButtonView } from '@/shared/model/types/Button/ButtonView'

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
		max-width: 502px;
	}

	&__button-list {
		display: grid;
		margin-top: $indent-l;
		gap: $indent-s $indent-m;
		grid-template-columns: repeat(2, 1fr);

		@media screen and (max-width: 480px) {
			grid-template-columns: 1fr;
		}
	}
}
</style>
