<template>
	<BaseModal class="project-modal" :title="title">
		<BaseForm class="project-modal__form">
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
		<BaseButton class="project-modal__button">Сохранить изменения</BaseButton>
	</BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/shared/ui/Modal/BaseModal.vue'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import BaseForm from '@/shared/ui/Form/BaseForm.vue'
import InputList from '@/shared/ui/Input/InputList.vue'
import type { Project } from '@/shared/model/types/Project/Project'
import useProjectForm from '@/features/project/modal/composable/useProjectForm'

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
