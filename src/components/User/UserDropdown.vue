<template>
  <BasePopupOnMouseOver
    class="user-dropdown"
    @on-toggle="toggleIcon"
  >
    <template #head>
      <div class="user-dropdown__head">
        <p class="user-dropdown__name">
          {{ getUser.username }}
        </p>
        <DropdownButtonIcon :is-active="isActive" />
      </div>
    </template>
    <template #body>
      <BaseOptionList>
        <BaseOption
          class="user-dropdown__option"
          @click="openModal"
        >
          <button class="body_p">
            Выйти
          </button>
        </BaseOption>
      </BaseOptionList>
      <ConfirmLogoutModal
        v-if="modalIsOpen"
        @on-close="closeModal"
      />
    </template>
  </BasePopupOnMouseOver>
</template>

<script lang="ts" setup>
import DropdownButtonIcon from '@/components/ui/Button/DropdownButtonIcon.vue'
import BaseOptionList from '@/components/ui/Option/BaseOptionList.vue'
import BaseOption from '@/components/ui/Option/BaseOption.vue'
import { type Ref, ref } from 'vue'
import BasePopupOnMouseOver from '@/components/ui/Popup/BasePopupOnMouseOver.vue'
import ConfirmLogoutModal from '@/components/ConfirmModals/ConfirmLogoutModal.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import useModal from '@/composables/useModal'

const isActive: Ref<boolean> = ref(false)

const toggleIcon = (value: boolean) => {
	isActive.value = value
}

const userStore = useUserStore()
const { getUser } = storeToRefs(userStore)

const { openModal, closeModal, modalIsOpen } = useModal()
</script>

<style lang="scss" scoped>
.user-dropdown {
	position: relative;

	&__head {
		display: flex;
		align-items: center;
		gap: $indent-xs;
	}

	&__name {
		@include max-line-count;
	}

	&:deep(.popup-on-mouse-over__body) {
		width: 239px;
	}

	&__option {
		padding: 12px $indent-s;
	}
}
</style>
