<template>
  <div class="accesses-table">
    <BaseTableGroup>
      <template #head>
        <tr>
          <th
            v-for="(field, index) in tableFields"
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
            v-for="(field, index) in tableFields"
            :key="index"
          >
            {{ access[field.key] }}
          </td>
          <td>
            <TableActionList
              @on-edit="openAccessModal({ access })"
              @on-delete="openConfirmDeleteModal({ title: access.type })"
            />
          </td>
        </tr>
      </template>
      <template #cards>
        <TableCardWithActionList
          v-for="access in accesses"
          :key="access.id"
          :fields="tableFields"
          :value="access"
          @on-edit="openAccessModal({ access })"
          @on-delete="openConfirmDeleteModal({ title: access.type })"
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
      :title="confirmDeleteModalOptions.title"
      button-confirm-text="Удалить доступ"
      @on-close="closeConfirmDeleteModal"
    />
  </div>
</template>

<script setup lang="ts">
import TableActionList from '@/components/ui/Table/TableActionList.vue'
import BaseTableGroup from '@/components/ui/Table/BaseTableGroup.vue'
import TableCardWithActionList from '@/components/ui/Table/TableCardWithActionList.vue'
import type { TableField } from '@/model/types/Table/Table'
import useConfirmDeleteModal from '@/composable/useConfirmDeleteModal'
import ConfirmDeleteModal from '@/components/ConfirmModal/ConfirmDeleteModal.vue'
import type { Access } from '@/model/types/Access/Access'
import AccessModal from '@/components/Accesses/AccessModal.vue'
import useAccessModal from '@/composable/useAccessModal'

interface Props {
	accesses: Access[]
}

withDefaults(defineProps<Props>(), {
	accesses: () => [],
})

const { openAccessModal, closeAccessModal, accessModalIsOpen, accessModalOptions } =
	useAccessModal()
const {
	openConfirmDeleteModal,
	closeConfirmDeleteModal,
	confirmDeleteModalIsOpen,
	confirmDeleteModalOptions,
} = useConfirmDeleteModal()

const tableFields: TableField<keyof Access>[] = [
	{
		label: 'Тип доступа',
		key: 'type',
	},
	{
		label: 'Адрес',
		key: 'origin',
	},
	{
		label: 'Логин',
		key: 'login',
	},
]
</script>

<style scoped lang="scss">
.accesses-table {
	td:last-child {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
