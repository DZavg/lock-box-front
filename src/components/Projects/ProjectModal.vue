<template>
  <BaseModal
    class="project-modal"
    :title="title"
  >
    <BaseForm
      class="project-modal__form"
      @submit="$emit('onSubmit', form)"
    >
      <InputList>
        <BaseInput
          v-model="form.title"
          label="Название проекта"
          name="title"
          :error="errors.title"
          placeholder="Поле ввода"
        />
        <BaseInput
          v-model="form.domain"
          label="Домен"
          name="domain"
          placeholder="Поле ввода"
          :error="errors.domain"
        />
      </InputList>
    </BaseForm>
    <BaseButton
      class="project-modal__button"
      :loading="loading"
      @on-click="$emit('onSubmit', form)"
    >
      {{ buttonText }}
    </BaseButton>
  </BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/components/ui/Modal/BaseModal.vue'
import BaseInput from '@/components/ui/Input/BaseInput.vue'
import BaseButton from '@/components/ui/Button/BaseButton.vue'
import BaseForm from '@/components/ui/Form/BaseForm.vue'
import InputList from '@/components/ui/Input/InputList.vue'
import type { Project } from '@/api/project/entity/Project'
import type { Error } from '@/global/types/api/error/Error'
import { projectDefaults } from '@/global/defaults/project/Project'
import { ref, type Ref } from 'vue'

interface Props {
	project?: Project
	title?: string
	buttonText?: string
	errors?: Error
	loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	project: () => ({ ...projectDefaults }),
	title: 'Редактировать проект',
	buttonText: 'Сохранить изменения',
	loading: false,
	errors: () => ({}),
})

const form: Ref<Project> = ref(props.project)

defineEmits<{
	(e: 'onSubmit', form: Project): void
}>()
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
