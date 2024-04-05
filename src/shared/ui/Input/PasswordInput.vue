<template>
	<InputWithIcon :type="type" v-bind="props">
		<EyeButtonIcon :active="active" :icon-color="iconColor" @click="switchType" />
	</InputWithIcon>
</template>

<script lang="ts" setup>
import InputWithIcon from '@/shared/ui/Input/InputWithIcon.vue'
import EyeButtonIcon from '@/shared/ui/Button/EyeButtonIcon.vue'
import { computed, ref, type Ref } from 'vue'
import { IconColor } from '@/shared/model/types/Icon/IconColor'

interface Props {
	name?: string
	modelValue?: string
	label?: string
	placeholder?: string
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
const iconColor = computed(() => (props.disabled ? IconColor.GrayThird : IconColor.White))

const switchType = () => {
	active.value = !active.value
}
</script>

<style lang="scss" scoped></style>
