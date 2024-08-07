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
              :external-link="access.origin"
              @on-copy="copyPassword(access)"
              @on-edit="confirmAction(access, openAccessModal)"
              @on-delete="confirmAction(access, openConfirmDeleteModal)"
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
          :external-link="access.origin"
          @on-copy="copyPassword(access)"
          @on-edit="confirmAction(access, openAccessModal)"
          @on-delete="confirmAction(access, openConfirmDeleteModal)"
        />
      </template>
    </BaseTableGroup>
    <UpdateAccessModal
      v-if="accessModalIsOpen"
      :access="selectAccess"
      @on-close="closeAccessModal"
      @on-success="$emit('onSuccess')"
    />
    <ConfirmDeleteAccessModal
      v-if="confirmDeleteModalIsOpen"
      :access="selectAccess"
      @on-close="closeConfirmDeleteModal"
      @on-success="$emit('onSuccess')"
    />
  </div>
</template>

<script setup lang="ts">
import TableActionList from '@/components/ui/Table/TableActionList.vue'
import BaseTableGroup from '@/components/ui/Table/BaseTableGroup.vue'
import TableCardWithActionList from '@/components/ui/Table/TableCardWithActionList.vue'
import type { Access } from '@/api/access/entity/Access'
import { accessesTableFieldsData } from '@/global/data/access/AccessesTableData'
import useClipboard from '@/composables/useClipboard'
import useModal from '@/composables/useModal'
import { ref, type Ref } from 'vue'
import { accessDefaults } from '@/global/defaults/access/Project'
import { useAccessStore } from '@/stores/access'
import UpdateAccessModal from '@/components/Accesses/Modals/UpdateAccessModal.vue'
import ConfirmDeleteAccessModal from '@/components/Accesses/Modals/ConfirmDeleteAccessModal.vue'

interface Props {
	accesses: Access[]
}

withDefaults(defineProps<Props>(), {
	accesses: () => [],
})

defineEmits<{
	(e: 'onSuccess'): void
}>()

const selectAccess: Ref<Access> = ref(accessDefaults)

const {
	openModal: openAccessModal,
	closeModal: closeAccessModal,
	modalIsOpen: accessModalIsOpen,
} = useModal()
const {
	modalIsOpen: confirmDeleteModalIsOpen,
	openModal: openConfirmDeleteModal,
	closeModal: closeConfirmDeleteModal,
} = useModal()
const { writeText } = useClipboard()

const accessStore = useAccessStore()
const { getPasswordById } = accessStore

const confirmAction = (access: Access, callback: Function = () => {}) => {
	callback()
	selectAccess.value = access
}

const copyPassword = (access: Access) => {
	writeText(getPasswordById(access.id))
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
