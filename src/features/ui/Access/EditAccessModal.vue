<template>
	<BaseModal class="edit-access-modal">
		<p class="h2 modal-h1-title edit-access-modal__title">Редактировать доступ</p>
		<div class="edit-access-modal__form">
			<BaseInput label="Адрес" placeholder="Поле ввода" name="address" />
			<BaseInput label="Логин" placeholder="Поле ввода" name="login" />
			<PasswordInput />
			<BaseSelect label="Тип доступа" name="type" :options="[{ id: '0', title: 'SSH' }]" />
		</div>
		<BaseButton class="edit-access-modal__button">Сохранить изменения</BaseButton>
	</BaseModal>
</template>

<script lang="ts" setup>
import BaseModal from '@/shared/ui/Modal/BaseModal.vue'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'
import BaseButton from '@/shared/ui/Button/BaseButton.vue'
import PasswordInput from '@/shared/ui/Input/PasswordInput.vue'
import BaseSelect from '@/shared/ui/Select/BaseSelect.vue'
</script>

<style lang="scss" scoped>
.edit-access-modal {
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
