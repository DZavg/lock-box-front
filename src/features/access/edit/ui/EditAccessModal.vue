<template>
	<BaseModal class="edit-access-modal" title="Редактировать доступ">
		<BaseForm class="edit-access-modal__form">
			<InputList>
				<BaseInput label="Адрес" name="address" placeholder="Поле ввода" />
				<BaseInput label="Логин" name="login" placeholder="Поле ввода" />
				<PasswordInput />
				<BaseSelect :options="[{ id: '0', title: 'SSH' }]" label="Тип доступа" name="type" />
			</InputList>
		</BaseForm>
		<BaseButton class="edit-access-modal__button">Сохранить изменения</BaseButton>
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
</script>

<style lang="scss" scoped>
.edit-access-modal {
	&__form {
		margin-bottom: $indent-l;
	}

	&__button {
		width: 100%;
	}
}
</style>
