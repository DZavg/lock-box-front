<template>
  <BaseTableCard class="card-with-action-list">
    <BaseList
      class="card-with-action-list__fields"
      :fields="fields"
      :value="value"
    />
    <TableActionList
      :external-link="externalLink"
      :link="link"
      :copy-link="copyLink"
      @on-edit="$emit('onEdit')"
      @on-delete="$emit('onDelete')"
    />
  </BaseTableCard>
</template>

<script setup lang="ts">
import BaseTableCard from '@/components/ui/Table/BaseTableCard.vue'
import TableActionList from '@/components/ui/Table/TableActionList.vue'
import BaseList from '@/components/ui/List/BaseList.vue'
import type { ListField, ListValue } from '@/shared/model/types/List/List'

interface Props {
	fields: ListField[]
	value: ListValue
	externalLink?: string
	link?: string | object
	copyLink?: string
}

withDefaults(defineProps<Props>(), {
	fields: () => [],
	value: () => ({}),
	externalLink: '',
	link: '',
	copyLink: '',
})

defineEmits<{ (e: 'onEdit'): void; (e: 'onDelete'): void }>()
</script>

<style scoped lang="scss">
.card-with-action-list {
	&__fields {
		margin-bottom: $indent-s;
	}
}
</style>
