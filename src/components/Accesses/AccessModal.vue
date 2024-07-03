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
          :options="[{ id: '0', title: 'SSH' }]"
          label="Тип доступа"
          :error="errors.type"
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
import { ref, type Ref } from 'vue'
import type { Error } from '@/global/types/api/error/Error'

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
	(e: 'onSubmit', form: Access): void
}>()

const form: Ref<Access> = ref(props.access)
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
