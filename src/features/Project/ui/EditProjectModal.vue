<template>
	<BaseModal class="edit-project-modal">
		<p class="h2 modal-h1-title edit-project-modal__title">Редактировать проект</p>
		<div class="edit-project-modal__form">
			<BaseInput label="Название проекта" placeholder="Поле ввода" name="project_name" />
			<BaseInput label="Домен" placeholder="Поле ввода" name="project_domain" />
		</div>
		<BaseButton class="edit-project-modal__button">Сохранить изменения</BaseButton>
	</BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/shared/ui/Modal/BaseModal.vue'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
</script>

<style lang="scss" scoped>
.edit-project-modal {
	&__title {
		margin-bottom: $indent-s;
	}

	&__form {
		display: flex;
		flex-direction: column;
		gap: $indent-s;
		margin-bottom: $indent-l;
	}

	&__button {
		width: 100%;
	}
}
</style>
