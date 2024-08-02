<template>
  <BaseModal
    class="access-modal"
    :title="title"
  >
    <BaseForm
      class="access-modal__form"
      @submit="$emit('onSubmit', form)"
    >
      <InputList>
        <BaseInput
          v-model="form.origin"
          label="Адрес"
          name="address"
          :error="errors.origin"
          placeholder="Поле ввода"
        />
        <BaseInput
          v-model="form.login"
          label="Логин"
          name="login"
          :error="errors.login"
          placeholder="Поле ввода"
        />
        <PasswordInput
          v-model="form.password"
          :error="errors.password"
        />
        <BaseSelect
          v-model="form.type"
          :options="getAccessTypes"
          label="Тип доступа"
          :error="errors.type"
          :loading="isLoading"
          name="type"
        />
      </InputList>
    </BaseForm>
    <BaseButton
      class="access-modal__button"
      @on-click="$emit('onSubmit', form)"
    >
      Сохранить изменения
    </BaseButton>
  </BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/components/ui/Modal/BaseModal.vue'
import BaseInput from '@/components/ui/Input/BaseInput.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import PasswordInput from '@/components/ui/Input/PasswordInput.vue'
import BaseSelect from '@/components/ui/Select/BaseSelect.vue'
import BaseForm from '@/components/ui/Form/BaseForm.vue'
import InputList from '@/components/ui/Input/InputList.vue'
import type { Access } from '@/api/access/entity/Access'
import { accessDefaults } from '@/global/defaults/access/Project'
import { onMounted, ref, type Ref } from 'vue'
import type { Error } from '@/global/types/api/error/Error'
import type { AccessDto } from '@/api/access/dto/access.dto'
import { useAccessStore } from '@/stores/access'
import useRequest from '@/composables/useRequest'
import { storeToRefs } from 'pinia'

interface Props {
	access?: Access
	title?: string
	buttonText?: string
	errors?: Error
	loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	access: () => ({ ...accessDefaults }),
	title: 'Редактировать доступ',
	buttonText: 'Сохранить изменения',
	loading: false,
	errors: () => ({}),
})

defineEmits<{
	(e: 'onSubmit', form: AccessDto): void
}>()

const accessStore = useAccessStore()
const { getAllTypes } = accessStore
const { getAccessTypes } = storeToRefs(accessStore)

const { execute, isLoading } = useRequest()

const form: Ref<AccessDto> = ref(
	JSON.parse(
		JSON.stringify({
			origin: props.access.origin,
			login: props.access.login,
			type: props.access.type.id,
		}),
	),
)

onMounted(async () => {
	await execute(getAllTypes)
})
</script>

<style lang="scss" scoped>
.access-modal {
	&__form {
		margin-bottom: $indent-l;
	}

	&__button {
		width: 100%;
	}
}
</style>
