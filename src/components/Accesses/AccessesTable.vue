<template>
  <div class="accesses-table">
    <BaseTableGroup>
      <template #head>
        <tr>
          <th
            v-for="(field, index) in accessesTableFieldsData"
            :key="index"
          >
            {{ field.label }}
          </th>
          <th />
        </tr>
      </template>
      <template #body>
        <tr
          v-for="access in accesses"
          :key="access.id"
        >
          <td
            v-for="(field, index) in accessesTableFieldsData"
            :key="index"
          >
            {{ access[field.key] }}
          </td>
          <td>
            <TableActionList
              :show-copy-button="true"
              @on-copy="copyPassword(access)"
              @on-edit="openAccessModal({ access })"
              @on-delete="openConfirmDeleteModal"
            />
          </td>
        </tr>
      </template>
      <template #cards>
        <TableCardWithActionList
          v-for="access in accesses"
          :key="access.id"
          :fields="accessesTableFieldsData"
          :value="access"
          :show-copy-button="true"
          @on-copy="copyPassword(access)"
          @on-edit="openAccessModal({ access })"
          @on-delete="openConfirmDeleteModal"
        />
      </template>
    </BaseTableGroup>
    <AccessModal
      v-if="accessModalIsOpen"
      :access="accessModalOptions.access"
      @on-close="closeAccessModal"
    />
    <ConfirmDeleteModal
      v-if="confirmDeleteModalIsOpen"
      :title="selectAccess.type"
      button-confirm-text="Удалить доступ"
      @on-close="closeConfirmDeleteModal"
    />
  </div>
</template>

<script setup lang="ts">
import TableActionList from '@/components/ui/Table/TableActionList.vue'
import BaseTableGroup from '@/components/ui/Table/BaseTableGroup.vue'
import TableCardWithActionList from '@/components/ui/Table/TableCardWithActionList.vue'
import ConfirmDeleteModal from '@/components/ConfirmModals/ConfirmDeleteModal.vue'
import type { Access } from '@/global/types/api/access/Access'
import AccessModal from '@/components/Accesses/AccessModal.vue'
import useAccessModal from '@/composables/modals/useAccessModal'
import { accessesTableFieldsData } from '@/global/data/access/AccessesTableData'
import useClipboard from '@/composables/useClipboard'
import useModal from '@/composables/useModal'
import { ref, type Ref } from 'vue'
import { accessDefaults } from '@/global/defaults/access/Project'

interface Props {
	accesses: Access[]
}

withDefaults(defineProps<Props>(), {
	accesses: () => [],
})

const selectAccess: Ref<Access> = ref(accessDefaults)

const { openAccessModal, closeAccessModal, accessModalIsOpen, accessModalOptions } =
	useAccessModal()
const {
	modalIsOpen: confirmDeleteModalIsOpen,
	openModal: openConfirmDeleteModal,
	closeModal: closeConfirmDeleteModal,
} = useModal()
const { writeText } = useClipboard()

const copyPassword = (access: Access) => {
	writeText(access.login)
}
</script>

<style scoped lang="scss">
.accesses-table {
	td:last-child {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
