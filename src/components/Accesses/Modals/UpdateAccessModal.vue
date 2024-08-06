<template>
  <AccessModal
    :loading="isLoading"
    :errors="errors"
    :access="access"
    @on-close="$emit('onClose')"
    @on-submit="updateAccess"
  />
</template>

<script setup lang="ts">
import AccessModal from '@/components/Accesses/Modals/AccessModal.vue'
import type { Access } from '@/api/access/entity/Access'
import { accessDefaults } from '@/global/defaults/access/Project'
import type { AccessDto } from '@/api/access/dto/access.dto'
import deleteDuplicateFields from '@/utils/deleteDuplicateFields'
import useRequest from '@/composables/useRequest'
import { useAccessStore } from '@/stores/access'

interface Props {
	access?: Access
}

const props = withDefaults(defineProps<Props>(), {
	access: () => ({ ...accessDefaults }),
})

const emits = defineEmits<{
	(e: 'onClose'): void
	(e: 'onSuccess'): void
}>()

const { execute, isLoading, errors } = useRequest()

const accessStore = useAccessStore()
const { updateOneById } = accessStore

const updateAccess = async (form: AccessDto) => {
	await execute(async () => {
		const response = await updateOneById(
			props.access.id,
			deleteDuplicateFields(form, { ...props.access, type: props.access.type.id }),
		)
		emits('onSuccess')
		emits('onClose')
		return response
	})
}
</script>

<style scoped lang="scss"></style>
