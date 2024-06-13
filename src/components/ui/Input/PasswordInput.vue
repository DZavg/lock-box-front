<template>
  <InputWithIcon
    v-bind="props"
    v-model="inputValue"
    :type="type"
  >
    <EyeButtonIcon
      :active="active"
      :icon-color="iconColor"
      @click="switchType"
    />
  </InputWithIcon>
</template>

<script lang="ts" setup>
import InputWithIcon from '@/components/ui/Input/InputWithIcon.vue'
import EyeButtonIcon from '@/components/ui/Button/EyeButtonIcon.vue'
import { computed, ref, type Ref } from 'vue'
import { Color } from '@/global/types/ui/color/Color'

interface Props {
	name?: string
	label?: string
	placeholder?: string
	error?: string
	disabled?: boolean
	autocomplete?: string
}

const props = withDefaults(defineProps<Props>(), {
	name: 'password',
	label: 'Пароль',
	placeholder: '******',
	error: '',
	disabled: false,
	autocomplete: 'off',
})

const active: Ref<boolean> = ref(false)

const type = computed(() => (active.value ? 'text' : 'password'))
const iconColor = computed(() => (props.disabled ? Color.GrayThird : Color.White))

const switchType = () => {
	active.value = !active.value
}

defineEmits<(e: 'update:modelValue', value: string) => void>()

const inputValue = defineModel<string>('modelValue', { default: '' })
</script>

<style lang="scss" scoped></style>
