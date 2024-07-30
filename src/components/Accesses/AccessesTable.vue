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
          @on-copy="copyPassword(access)"
          @on-edit="confirmAction(access, openAccessModal)"
          @on-delete="confirmAction(access, openConfirmDeleteModal)"
        />
      </template>
    </BaseTableGroup>
    <AccessModal
      v-if="accessModalIsOpen"
      :access="selectAccess"
      @on-close="closeAccessModal"
      @on-submit="updateAccess"
    />
    <ConfirmDeleteModal
      v-if="confirmDeleteModalIsOpen"
      :title="selectAccess.type.title"
      button-confirm-text="Удалить доступ"
      @on-close="closeConfirmDeleteModal"
      @on-confirm="deleteAccess"
    />
  </div>
</template>

<script setup lang="ts">
import TableActionList from '@/components/ui/Table/TableActionList.vue'
import BaseTableGroup from '@/components/ui/Table/BaseTableGroup.vue'
import TableCardWithActionList from '@/components/ui/Table/TableCardWithActionList.vue'
import ConfirmDeleteModal from '@/components/ConfirmModals/ConfirmDeleteModal.vue'
import type { Access } from '@/api/access/entity/Access'
import AccessModal from '@/components/Accesses/AccessModal.vue'
import { accessesTableFieldsData } from '@/global/data/access/AccessesTableData'
import useClipboard from '@/composables/useClipboard'
import useModal from '@/composables/useModal'
import { ref, type Ref } from 'vue'
import { accessDefaults } from '@/global/defaults/access/Project'
import deleteDuplicateFields from '@/lib/deleteDuplicateFields'
import type { AccessDto } from '@/api/access/dto/access.dto'
import useRequest from '@/composables/useRequest'
import { useAccessStore } from '@/stores/access'

interface Props {
	accesses: Access[]
}

withDefaults(defineProps<Props>(), {
	accesses: () => [],
})

const emits = defineEmits<{
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
const { execute } = useRequest()

const accessStore = useAccessStore()
const { updateOneById, deleteOneById, getPasswordById } = accessStore

const confirmAction = (access: Access, callback: Function = () => {}) => {
	callback()
	selectAccess.value = access
}

const deleteAccess = async () => {
	await execute(async () => {
		const response = await deleteOneById(selectAccess.value?.id)
		emits('onSuccess')
		closeConfirmDeleteModal()
		return response
	})
}

const updateAccess = async (form: AccessDto) => {
	await execute(async () => {
		const response = await updateOneById(
			selectAccess.value?.id,
			deleteDuplicateFields(form, selectAccess.value),
		)
		emits('onSuccess')
		closeAccessModal()
		return response
	})
}

const copyPassword = async (access: Access) => {
	await execute(async () => {
		const response = await getPasswordById(access.id)
		writeText(response.password)
		return response
	})
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
