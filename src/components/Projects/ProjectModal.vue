<template>
  <BaseModal
    class="project-modal"
    :title="title"
  >
    <BaseForm class="project-modal__form">
      <InputList>
        <BaseInput
          v-model="form.title"
          label="Название проекта"
          name="title"
          placeholder="Поле ввода"
        />
        <BaseInput
          v-model="form.domain"
          label="Домен"
          name="domain"
          placeholder="Поле ввода"
        />
      </InputList>
    </BaseForm>
    <BaseButton class="project-modal__button">
      Сохранить изменения
    </BaseButton>
  </BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/components/ui/Modal/BaseModal.vue'
import BaseInput from '@/components/ui/Input/BaseInput.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import BaseForm from '@/components/ui/Form/BaseForm.vue'
import InputList from '@/components/ui/Input/InputList.vue'
import type { Project } from '@/model/types/Project/Project'
import useProjectForm from '@/composable/Project/useProjectForm'

interface Props {
	project?: Project
	title?: string
}

const props = withDefaults(defineProps<Props>(), {
	project: () => ({
		id: '',
		title: '',
		domain: '',
	}),
	title: 'Редактировать проект',
})

const { form } = useProjectForm(props.project)
</script>

<style lang="scss" scoped>
.project-modal {
	&__form {
		margin-bottom: $indent-l;
	}

	&__button {
		width: 100%;
	}
}
</style>
