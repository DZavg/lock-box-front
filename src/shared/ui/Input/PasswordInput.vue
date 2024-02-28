<template>
	<BaseInput class="password-input" v-bind="props" :type="type">
		<EyeButtonIcon class="password-input__button" @click="switchType" :active="active" />
	</BaseInput>
</template>

<script lang="ts" setup>
import BaseInput from '@/shared/ui/Input/BaseInput.vue'
import EyeButtonIcon from '@/shared/ui/Button/EyeButtonIcon.vue'
import { computed, ref, type Ref } from 'vue'

interface Props {
	name: string
	modelValue?: string
	label: string
	placeholder: string
	error?: string
	disabled?: boolean
	autocomplete?: string
}

const props = withDefaults(defineProps<Props>(), {
	name: 'password',
	modelValue: '',
	label: 'Пароль',
	placeholder: '******',
	error: '',
	disabled: false,
	autocomplete: 'off',
})

const active: Ref<boolean> = ref(false)

const type = computed(() => (active.value ? 'text' : 'password'))

const switchType = () => {
	active.value = !active.value
}
</script>

<style lang="scss" scoped>
.password-input {
	&:deep(.input__wrapper) {
		position: relative;

		input {
			padding-right: 44px;
		}
	}

	&__button {
		position: absolute;
		right: $indent-s;
		top: 50%;
		transform: translateY(-50%);
	}
}
</style>
