<template>
  <BaseModal
    class="access-modal"
    :title="title"
  >
    <BaseForm class="access-modal__form">
      <InputList>
        <BaseInput
          v-model="form.origin"
          label="Адрес"
          name="address"
          placeholder="Поле ввода"
        />
        <BaseInput
          v-model="form.login"
          label="Логин"
          name="login"
          placeholder="Поле ввода"
        />
        <PasswordInput v-model="form.password" />
        <BaseSelect
          v-model="form.type"
          :options="[{ id: '0', title: 'SSH' }]"
          label="Тип доступа"
          name="type"
        />
      </InputList>
    </BaseForm>
    <BaseButton class="access-modal__button">
      Сохранить изменения
    </BaseButton>
  </BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/shared/ui/Modal/BaseModal.vue'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import PasswordInput from '@/shared/ui/Input/PasswordInput.vue'
import BaseSelect from '@/shared/ui/Select/BaseSelect.vue'
import BaseForm from '@/shared/ui/Form/BaseForm.vue'
import InputList from '@/shared/ui/Input/InputList.vue'
import type { Access } from '@/shared/model/types/Access/Access'
import useAccessForm from '@/features/access/edit/composable/useAccessForm'

interface Props {
	access?: Access
	title?: string
}

const props = withDefaults(defineProps<Props>(), {
	access: () => ({
		id: '',
		origin: '',
		login: '',
		type: '',
	}),
	title: 'Редактировать доступ',
})

const { form } = useAccessForm(props.access)
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
