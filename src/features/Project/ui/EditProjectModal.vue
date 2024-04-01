<template>
	<BaseModal class="edit-project-modal">
		<p class="h2 modal-h1-title edit-project-modal__title">Редактировать проект</p>
		<BaseForm class="edit-project-modal__form">
			<InputList>
				<BaseInput label="Название проекта" name="project_name" placeholder="Поле ввода" />
				<BaseInput label="Домен" name="project_domain" placeholder="Поле ввода" />
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
