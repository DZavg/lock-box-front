<template>
	<BaseModal class="edit-project-modal" title="Редактировать проект">
		<BaseForm class="edit-project-modal__form">
			<InputList>
				<BaseInput
					label="Название проекта"
					name="title"
					placeholder="Поле ввода"
					v-model="form.title"
				/>
				<BaseInput label="Домен" name="domain" placeholder="Поле ввода" v-model="form.domain" />
			</InputList>
		</BaseForm>
		<BaseButton class="edit-project-modal__button">Сохранить изменения</BaseButton>
	</BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/shared/ui/Modal/BaseModal.vue'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import BaseForm from '@/shared/ui/Form/BaseForm.vue'
import InputList from '@/shared/ui/Input/InputList.vue'
import type { Project } from '@/shared/model/types/Project/Project'
import useEditProjectForm from '@/features/project/edit/composable/useEditProjectForm'

interface Props {
	project: Project
}

const props = withDefaults(defineProps<Props>(), {
	project: () => ({
		id: '',
		title: '',
		domain: '',
	}),
})

const { form, fillForm } = useEditProjectForm()
fillForm(props.project)
</script>

<style lang="scss" scoped>
.edit-project-modal {
	&__form {
		margin-bottom: $indent-l;
	}

	&__button {
		width: 100%;
	}
}
</style>
